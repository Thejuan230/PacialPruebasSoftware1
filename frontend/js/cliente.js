// Panel del Cliente - Funcionalidades Interactivas
document.addEventListener('DOMContentLoaded', () => {
    
    // Cargar contadores
    loadPurchaseCount();
    
    // Configurar modales
    setupModals();
    
});



// ====== CONTADOR DE COMPRAS ======
async function loadPurchaseCount() {
    try {
        const token = localStorage.getItem('token');
        if (!token) return;
        
        const response = await fetch('http://localhost:3000/api/ventas', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        if (response.ok) {
            const purchases = await response.json();
            const purchaseCount = purchases.length;
            
            const purchaseCountElement = document.getElementById('purchaseCount');
            if (purchaseCountElement) {
                purchaseCountElement.textContent = purchaseCount;
                
                // Actualizar estadísticas del perfil
                const totalPurchasesElement = document.getElementById('totalPurchases');
                if (totalPurchasesElement) {
                    totalPurchasesElement.textContent = purchaseCount;
                }
                
                // Calcular total gastado
                const totalSpent = purchases.reduce((total, purchase) => {
                    return total + (parseFloat(purchase.total) || 0);
                }, 0);
                
                const totalSpentElement = document.getElementById('totalSpent');
                if (totalSpentElement) {
                    totalSpentElement.textContent = `$${totalSpent.toFixed(2)}`;
                }
            }
        }
    } catch (error) {
        console.error('Error al cargar compras:', error);
    }
}


// ====== CONFIGURACIÓN DE MODALES ======
function setupModals() {
    
    // Modal de Historial de Compras
    const purchaseModal = document.getElementById('purchaseHistoryModal');
    const purchaseClose = purchaseModal?.querySelector('.close');
    
    if (purchaseClose) {
        purchaseClose.addEventListener('click', () => {
            purchaseModal.style.display = 'none';
        });
    }
    
    
    // Cerrar modales al hacer clic fuera
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
}


// ====== MOSTRAR HISTORIAL DE COMPRAS ======
async function showPurchaseHistory() {
    const modal = document.getElementById('purchaseHistoryModal');
    if (!modal) return;
    
    modal.style.display = 'flex';
    
    try {
        const token = localStorage.getItem('token');
        if (!token) return;
        
        const response = await fetch('http://localhost:3000/api/ventas', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        const purchaseList = document.getElementById('purchaseList');
        if (!purchaseList) return;
        
        if (response.ok) {
            const purchases = await response.json();
            
            if (purchases.length === 0) {
                purchaseList.innerHTML = `
                    <div class="no-purchases">
                        <div class="no-purchases-icon">📦</div>
                        <h3>No tienes compras aún</h3>
                        <p>¡Explora nuestro catálogo y haz tu primera compra!</p>
                        <a href="catalogo.html" class="btn-client-primary">Ver Catálogo</a>
                    </div>
                `;
            } else {
                purchaseList.innerHTML = purchases.map(purchase => `
                    <div class="purchase-item">
                        <div class="purchase-header">
                            <h4>Compra #${purchase.id}</h4>
                            <span class="purchase-date">${new Date(purchase.fecha).toLocaleDateString()}</span>
                        </div>
                        <div class="purchase-details">
                            <p><strong>Total:</strong> $${parseFloat(purchase.total).toFixed(2)}</p>
                            <p><strong>Método de pago:</strong> ${purchase.metodo_pago}</p>
                            <p><strong>Estado:</strong> <span class="status completed">Completado</span></p>
                        </div>
                        <button class="btn-view-details" onclick="viewPurchaseDetails(${purchase.id})">
                            Ver Detalles
                        </button>
                    </div>
                `).join('');
            }
        } else {
            purchaseList.innerHTML = `
                <div class="no-purchases">
                    <div class="no-purchases-icon">❌</div>
                    <h3>Error al cargar compras</h3>
                    <p>No se pudieron cargar tus compras en este momento</p>
                </div>
            `;
        }
    } catch (error) {
        console.error('Error al cargar historial:', error);
    }
}


// ====== VER DETALLES DE COMPRA ======
async function viewPurchaseDetails(purchaseId) {
    try {
        const token = localStorage.getItem('token');
        if (!token) return;
        
        const response = await fetch(`http://localhost:3000/api/ventas/${purchaseId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        if (response.ok) {
            const purchase = await response.json();
            
            let detailsText = `Detalles de la Compra #${purchaseId}\n\n`;
            detailsText += `Total: $${parseFloat(purchase.total).toFixed(2)}\n`;
            detailsText += `Fecha: ${new Date(purchase.fecha).toLocaleDateString()}\n\n`;
            detailsText += `Productos:\n`;
            
            if (purchase.detalle) {
                purchase.detalle.forEach(item => {
                    detailsText += `• ${item.producto_nombre} x${item.cantidad} = $${item.subtotal}\n`;
                });
            }
            
            alert(detailsText);
        } else {
            alert('No se pudieron cargar los detalles de la compra');
        }
    } catch (error) {
        console.error('Error al cargar detalles:', error);
        alert('Error al cargar los detalles de la compra');
    }
}



// ====== ACTUALIZAR CONTADORES CUANDO SE REGRESA DE OTRAS PÁGINAS ======
window.addEventListener('focus', () => {
    loadPurchaseCount();
});

// ====== EXPORTAR FUNCIONES GLOBALES ======
window.showPurchaseHistory = showPurchaseHistory;
window.viewPurchaseDetails = viewPurchaseDetails;
