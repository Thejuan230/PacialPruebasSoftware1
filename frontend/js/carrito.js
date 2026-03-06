const cartBody = document.getElementById('cartBody');
const totalEl = document.getElementById('total');
const btnCheckout = document.getElementById('btnCheckout');
const metodoPagoEl = document.getElementById('metodo_pago');

function getCart() { return JSON.parse(localStorage.getItem('cart') || '[]'); }
function saveCart(c) { localStorage.setItem('cart', JSON.stringify(c)); }

function render() {
  const cart = getCart();
  cartBody.innerHTML = '';
  let total = 0;
  cart.forEach((item, idx) => {
    const subtotal = Number(item.precio_venta) * Number(item.cantidad);
    total += subtotal;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.producto}</td>
      <td>$${Number(item.precio_venta).toFixed(2)}</td>
      <td><input type="number" min="1" value="${item.cantidad}" data-idx="${idx}" class="qty" style="width:64px" /></td>
      <td>$${subtotal.toFixed(2)}</td>
      <td><button data-idx="${idx}" class="remove">Eliminar</button></td>
    `;
    cartBody.appendChild(tr);
  });
  totalEl.textContent = total.toFixed(2);

  // eventos de cantidad y eliminar
  document.querySelectorAll('.qty').forEach(input => {
    input.addEventListener('change', (e) => {
      const idx = e.target.dataset.idx;
      const v = Math.max(1, Number(e.target.value));
      const cart = getCart();
      cart[idx].cantidad = v;
      saveCart(cart);
      render();
    });
  });
  document.querySelectorAll('.remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = e.target.dataset.idx;
      const cart = getCart();
      cart.splice(idx, 1);
      saveCart(cart);
      render();
    });
  });
}

btnCheckout.addEventListener('click', async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    alert('Debes iniciar sesión para pagar');
    window.location.replace('/pages/login.html');
    return;
  }
  const cart = getCart();
  if (cart.length === 0) { alert('Carrito vacío'); return; }

  // preparar payload de items
  const items = cart.map(i => ({ product_id: i.id, cantidad: Number(i.cantidad) }));
  const metodo_pago = metodoPagoEl.value;

  try {
    const resp = await fetch('http://localhost:3000/api/ventas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ items, metodo_pago })
    });
    const data = await resp.json();
    if (!resp.ok) throw new Error(data.message || 'Error al pagar');
    
    // éxito: mostrar mini factura y limpiar carrito
    showMiniInvoice(data.ventaId, cart, metodo_pago);
    localStorage.removeItem('cart');
  } catch (err) {
    alert('Error al procesar pago: ' + err.message);
  }
});

// ====== FUNCIÓN PARA MOSTRAR MINI FACTURA ======
function showMiniInvoice(ventaId, cart, metodoPago) {
  // Obtener información del usuario
  const userName = localStorage.getItem('userName');
  const userEmail = localStorage.getItem('userEmail');
  
  // Verificar que tenemos los datos necesarios
  if (!userName || !userEmail) {
    console.warn('⚠️ Datos del usuario incompletos en localStorage');
    console.log('Datos disponibles:', {
      userName: localStorage.getItem('userName'),
      userEmail: localStorage.getItem('userEmail'),
      userRole: localStorage.getItem('userRole'),
      token: localStorage.getItem('token') ? 'Presente' : 'No presente'
    });
  }
  
  // Usar valores por defecto si no están disponibles
  const finalUserName = userName || 'Usuario';
  const finalUserEmail = userEmail || 'usuario@ejemplo.com';
  
  console.log('📋 Datos para la factura:', {
    nombre: finalUserName,
    email: finalUserEmail,
    metodoPago: metodoPago,
    ventaId: ventaId
  });
  
  // Calcular total
  const total = cart.reduce((sum, item) => sum + (Number(item.precio_venta) * Number(item.cantidad)), 0);
  
  // Crear modal de mini factura
  const modal = document.createElement('div');
  modal.className = 'invoice-modal';
  modal.innerHTML = `
    <div class="invoice-content">
      <div class="invoice-header">
        <h2>🧾 FACTURA DE VENTA</h2>
        <button class="close-invoice">&times;</button>
      </div>
      
      <div class="invoice-info">
        <div class="invoice-details">
          <div class="detail-row">
            <span class="label">N° Factura:</span>
            <span class="value">#${ventaId}</span>
          </div>
          <div class="detail-row">
            <span class="label">Fecha:</span>
            <span class="value">${new Date().toLocaleDateString('es-ES')}</span>
          </div>
          <div class="detail-row">
            <span class="label">Hora:</span>
            <span class="value">${new Date().toLocaleTimeString('es-ES', {hour: '2-digit', minute: '2-digit'})}</span>
          </div>
        </div>
        
        <div class="customer-info">
          <h3>👤 Datos del Cliente</h3>
          <div class="detail-row">
            <span class="label">Nombre:</span>
            <span class="value">${finalUserName}</span>
          </div>
          <div class="detail-row">
            <span class="label">Email:</span>
            <span class="value">${finalUserEmail}</span>
          </div>
          <div class="detail-row">
            <span class="label">Método de Pago:</span>
            <span class="value">${metodoPago === 'efectivo' ? '💵 Efectivo' : '💳 Tarjeta'}</span>
          </div>
        </div>
      </div>
      
      <div class="invoice-items">
        <h3>🛒 Productos</h3>
        <div class="items-list">
          ${cart.map(item => `
            <div class="item-row">
              <div class="item-name">${item.producto}</div>
              <div class="item-qty">${item.cantidad}x</div>
              <div class="item-price">$${Number(item.precio_venta).toFixed(2)}</div>
              <div class="item-subtotal">$${(Number(item.precio_venta) * Number(item.cantidad)).toFixed(2)}</div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="invoice-total">
        <div class="total-row">
          <span class="total-label">TOTAL:</span>
          <span class="total-amount">$${total.toFixed(2)}</span>
        </div>
      </div>
      
      <div class="invoice-footer">
        <div class="success-message">
          <div class="success-icon">✅</div>
          <h3>¡Compra realizada con éxito!</h3>
          <p>Tu pedido ha sido procesado correctamente</p>
        </div>
        <div class="invoice-actions">
          <button class="btn-continue" onclick="continueShopping()">🛍️ Seguir Comprando</button>
          <button class="btn-view-purchases" onclick="viewMyPurchases()">📦 Ver Mis Compras</button>
        </div>
      </div>
    </div>
  `;
  
  // Agregar estilos CSS
  const style = document.createElement('style');
  style.textContent = `
    .invoice-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(5px);
      z-index: 3000;
      display: flex;
      justify-content: center;
      align-items: center;
      animation: fadeIn 0.3s ease-out;
    }
    
    .invoice-content {
      background: linear-gradient(145deg, rgba(45, 27, 27, 0.95), rgba(61, 37, 37, 0.95));
      border: 1px solid rgba(139, 0, 0, 0.3);
      border-radius: 20px;
      width: 90%;
      max-width: 500px;
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: 0 25px 80px rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(20px);
      animation: slideIn 0.3s ease-out;
    }
    
    .invoice-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 25px;
      border-bottom: 2px solid rgba(139, 0, 0, 0.3);
      background: linear-gradient(145deg, #8b0000, #a52a2a);
      border-radius: 20px 20px 0 0;
    }
    
    .invoice-header h2 {
      color: #fff;
      margin: 0;
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 1px;
    }
    
    .close-invoice {
      background: none;
      border: none;
      color: #fff;
      font-size: 24px;
      cursor: pointer;
      transition: color 0.3s ease;
    }
    
    .close-invoice:hover {
      color: #ff6b6b;
    }
    
    .invoice-info {
      padding: 25px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      border-bottom: 1px solid rgba(139, 0, 0, 0.2);
    }
    
    .invoice-details, .customer-info {
      background: rgba(139, 0, 0, 0.1);
      padding: 15px;
      border-radius: 10px;
      border: 1px solid rgba(139, 0, 0, 0.2);
    }
    
    .customer-info h3 {
      color: #f5f5f5;
      margin: 0 0 15px 0;
      font-size: 1.1rem;
      font-weight: 500;
    }
    
    .detail-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      font-size: 0.9rem;
    }
    
    .label {
      color: rgba(232, 213, 213, 0.8);
      font-weight: 500;
    }
    
    .value {
      color: #f5f5f5;
      font-weight: 600;
    }
    
    .invoice-items {
      padding: 25px;
      border-bottom: 1px solid rgba(139, 0, 0, 0.2);
    }
    
    .invoice-items h3 {
      color: #f5f5f5;
      margin: 0 0 15px 0;
      font-size: 1.1rem;
      font-weight: 500;
    }
    
    .items-list {
      background: rgba(139, 0, 0, 0.1);
      border-radius: 10px;
      padding: 15px;
      border: 1px solid rgba(139, 0, 0, 0.2);
    }
    
    .item-row {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 10px;
      padding: 10px 0;
      border-bottom: 1px solid rgba(139, 0, 0, 0.1);
      align-items: center;
    }
    
    .item-row:last-child {
      border-bottom: none;
    }
    
    .item-name {
      color: #f5f5f5;
      font-weight: 500;
    }
    
    .item-qty, .item-price, .item-subtotal {
      color: rgba(232, 213, 213, 0.9);
      text-align: center;
      font-weight: 500;
    }
    
    .invoice-total {
      padding: 25px;
      background: rgba(139, 0, 0, 0.2);
      border-bottom: 1px solid rgba(139, 0, 0, 0.2);
    }
    
    .total-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 20px;
      background: linear-gradient(145deg, #8b0000, #a52a2a);
      border-radius: 10px;
      border: 1px solid rgba(139, 0, 0, 0.3);
    }
    
    .total-label {
      color: #fff;
      font-size: 1.2rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    .total-amount {
      color: #fff;
      font-size: 1.5rem;
      font-weight: 700;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
    
    .invoice-footer {
      padding: 25px;
      text-align: center;
    }
    
    .success-message {
      margin-bottom: 25px;
    }
    
    .success-icon {
      font-size: 3rem;
      margin-bottom: 15px;
      animation: bounce 1s ease-in-out;
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-10px); }
      60% { transform: translateY(-5px); }
    }
    
    .success-message h3 {
      color: #28a745;
      margin: 0 0 10px 0;
      font-size: 1.3rem;
      font-weight: 600;
    }
    
    .success-message p {
      color: rgba(232, 213, 213, 0.8);
      margin: 0;
      font-size: 0.9rem;
    }
    
    .invoice-actions {
      display: flex;
      gap: 15px;
      justify-content: center;
    }
    
    .btn-continue, .btn-view-purchases {
      padding: 12px 20px;
      border: none;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-size: 0.9rem;
    }
    
    .btn-continue {
      background: linear-gradient(145deg, #28a745, #20c997);
      color: #fff;
      box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
    }
    
    .btn-continue:hover {
      background: linear-gradient(145deg, #20c997, #17a2b8);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);
    }
    
    .btn-view-purchases {
      background: linear-gradient(145deg, #8b0000, #a52a2a);
      color: #fff;
      box-shadow: 0 4px 15px rgba(139, 0, 0, 0.3);
    }
    
    .btn-view-purchases:hover {
      background: linear-gradient(145deg, #a52a2a, #dc143c);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(139, 0, 0, 0.4);
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideIn {
      from { 
        opacity: 0; 
        transform: translateY(-30px) scale(0.95); 
      }
      to { 
        opacity: 1; 
        transform: translateY(0) scale(1); 
      }
    }
    
    @media (max-width: 768px) {
      .invoice-info {
        grid-template-columns: 1fr;
        gap: 15px;
      }
      
      .invoice-actions {
        flex-direction: column;
      }
      
      .item-row {
        grid-template-columns: 1fr;
        gap: 5px;
        text-align: center;
      }
      
      .invoice-content {
        width: 95%;
        margin: 10px;
      }
    }
  `;
  
  document.head.appendChild(style);
  document.body.appendChild(modal);
  
  // Event listeners
  modal.querySelector('.close-invoice').addEventListener('click', () => {
    document.body.removeChild(modal);
    document.head.removeChild(style);
  });
  
  // Cerrar al hacer clic fuera
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
      document.head.removeChild(style);
    }
  });
}

// ====== FUNCIONES DE ACCIÓN ======
function continueShopping() {
  // Cerrar modal y redirigir al catálogo
  const modal = document.querySelector('.invoice-modal');
  if (modal) {
    document.body.removeChild(modal);
    document.head.removeChild(document.querySelector('style'));
  }
  window.location.replace('/pages/catalogo.html');
}

function viewMyPurchases() {
  // Cerrar modal y redirigir al panel del cliente
  const modal = document.querySelector('.invoice-modal');
  if (modal) {
    document.body.removeChild(modal);
    document.head.removeChild(document.querySelector('style'));
  }
  window.location.replace('/pages/cliente.html');
}

// Exportar funciones globales
window.continueShopping = continueShopping;
window.viewMyPurchases = viewMyPurchases;

render();
