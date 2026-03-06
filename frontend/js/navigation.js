// ====== Script de navegación común ======

// Función para cerrar sesión
function cerrarSesion() {
  // Limpiar token y datos de sesión
  localStorage.removeItem('token');
  localStorage.removeItem('userRole');
  localStorage.removeItem('userName');
  
  // Redirigir al login
  window.location.replace('/pages/login.html');
}

// Función para volver atrás
function volverAtras() {
  // Verificar si hay historial
  if (window.history.length > 1) {
    window.history.back();
  } else {
    // Si no hay historial, ir al inicio según el rol
    const token = localStorage.getItem('token');
    if (token) {
      // Intentar decodificar el token para obtener el rol
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        if (payload.rol === 'admin') {
          window.location.href = '/pages/admin.html';
        } else {
          window.location.href = '/pages/cliente.html';
        }
      } catch (error) {
        window.location.href = '/pages/login.html';
      }
    } else {
      window.location.href = '/pages/login.html';
    }
  }
}

// Función para verificar autenticación
function verificarAutenticacion() {
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = '/pages/login.html';
    return false;
  }
  return true;
}

// Función para verificar rol de admin
function verificarAdmin() {
  const token = localStorage.getItem('token');
  if (!token) return false;
  
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.rol === 'admin';
  } catch (error) {
    return false;
  }
}

// Función para obtener información del usuario
function obtenerUsuario() {
  const token = localStorage.getItem('token');
  if (!token) return null;
  
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return {
      id: payload.id,
      name: payload.name,
      rol: payload.rol
    };
  } catch (error) {
    return null;
  }
}

// Función para crear barra de navegación
function crearBarraNavegacion() {
  const usuario = obtenerUsuario();
  if (!usuario) return;

  const navBar = document.createElement('div');
  navBar.className = 'navigation-bar';
  navBar.innerHTML = `
    <div class="nav-content">
      <div class="nav-left">
        <button onclick="volverAtras()" class="btn-back">
          ← Volver
        </button>
      </div>
      <div class="nav-center">
        <span class="user-info">Bienvenido, ${usuario.name} (${usuario.rol})</span>
      </div>
      <div class="nav-right">
        <button onclick="cerrarSesion()" class="btn-logout">
          Cerrar Sesión
        </button>
      </div>
    </div>
  `;
  
  // Insertar al inicio del body
  document.body.insertBefore(navBar, document.body.firstChild);
}

// Función para manejar el botón atrás del navegador después del logout
function configurarNavegacionPostLogout() {
  // Interceptar el evento popstate (botón atrás del navegador)
  window.addEventListener('popstate', function(event) {
    const token = localStorage.getItem('token');
    if (!token) {
      // Si no hay token, redirigir al login
      window.location.replace('/pages/login.html');
    }
  });

  // Agregar una entrada al historial cuando se carga la página
  if (localStorage.getItem('token')) {
    window.history.pushState({ page: 'authenticated' }, '', window.location.href);
  }
}

// Inicializar cuando se carga el DOM
document.addEventListener('DOMContentLoaded', function() {
  // Solo aplicar navegación si no estamos en login o register
  const currentPage = window.location.pathname;
  if (!currentPage.includes('login.html') && !currentPage.includes('register.html') && !currentPage.includes('index.html')) {
    if (verificarAutenticacion()) {
      crearBarraNavegacion();
      configurarNavegacionPostLogout();
    }
  }
});

// Exportar funciones para uso global
window.cerrarSesion = cerrarSesion;
window.volverAtras = volverAtras;
window.verificarAutenticacion = verificarAutenticacion;
window.verificarAdmin = verificarAdmin;
window.obtenerUsuario = obtenerUsuario;

