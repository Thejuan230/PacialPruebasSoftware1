# Especificación de Requisitos de Software (SRS)

**Proyecto: E-commerce – Sistema Integral de Compras en Línea**

**Revisión:** 1.0

**Fecha:** Marzo 2026

---

## Ficha del Documento

| Campo | Detalle |
|-------|---------|
| **Fecha de creación** | Marzo 2026 |
| **Revisión** | 1.0 |
| **Autor** | Juan Carlos |
| **Estado** | Completado |
| **Validación** | Pendiente |

---

## Contenido

- [1. Introducción](#1-introducción)
- [2. Descripción General](#2-descripción-general)
- [3. Requisitos Específicos](#3-requisitos-específicos)
- [4. Apéndices](#4-apéndices)

---

<p align="center">
  <img src="../frontend/img/Golem.webp" alt="E-commerce Logo" width="150" height="150">
</p>

---

## 1. Introducción

### 1.1 Propósito

Este documento constituye la Especificación de Requisitos de Software (SRS) del sistema de **E-commerce**, una plataforma de comercio electrónico desarrollada con Node.js/Express y MySQL, orientada a la gestión integral de productos, carrito de compras, pedidos y administración de ventas.

**Audiencia:**
- Desarrolladores
- Evaluadores / Testers
- Personal administrativo
- Docentes evaluadores

### 1.2 Alcance

**E-commerce** es una aplicación web que permite:

- A **clientes**: Explorar catálogo de productos, gestionar carrito de compras, realizar pedidos y consultar su historial.
- A **administradores**: Gestionar productos (CRUD), gestionar pedidos, visualizar estadísticas de ventas y gestionar usuarios.

**El sistema NO incluye en esta versión:**
- Pasarelas de pago en línea (Stripe, PayU)
- Notificaciones automáticas por email
- Aplicación móvil nativa
- Integración con logística externa

### 1.3 Personal Involucrado

| Campo | Detalle |
|-------|---------|
| **Nombre** | Juan Carlos |
| **Rol** | Desarrollador Full Stack |
| **Responsabilidades** | Análisis, diseño, desarrollo, pruebas y documentación |

### 1.4 Definiciones, Acrónimos y Abreviaturas

| Término | Definición |
|---------|------------|
| **SRS** | Software Requirements Specification |
| **RF** | Requisito Funcional |
| **RNF** | Requisito No Funcional |
| **CRUD** | Create, Read, Update, Delete |
| **JWT** | JSON Web Token |
| **API** | Application Programming Interface |
| **MySQL** | Sistema de base de datos relacional |
| **Express** | Framework web para Node.js |
| **Frontend** | Interfaz de usuario (HTML, CSS, JS) |
| **Backend** | Lógica de servidor (APIs, base de datos) |
| **Token** | Credencial de autenticación |
| **Rol** | Nivel de acceso de usuario (admin, cliente) |
| **Hash** | Encriptación de contraseña |
| **Bcrypt** | Librería de hashing seguro |

### 1.5 Referencias

| Referencia | URL |
|------------|-----|
| IEEE 830 | https://ieeexplore.ieee.org/document/720574 |
| Express.js | https://expressjs.com/ |
| MySQL | https://www.mysql.com/ |
| Node.js | https://nodejs.org/ |
| JWT | https://jwt.io/ |
| Bootstrap | https://getbootstrap.com/ |

---

## 2. Descripción General

### 2.1 Perspectiva del Producto

<div align="center">
  <img src="../frontend/img/Golem.webp" alt="Arquitectura E-commerce" width="120" height="120" style="margin: 10px;">
</div>

**E-commerce** es una aplicación web independiente de tres capas:

```
┌─────────────────────────────────────┐
│     CAPA DE PRESENTACIÓN            │
│   HTML + Bootstrap + JavaScript     │
│   Navegadores: Chrome, Firefox, Edge│
└─────────────────────────────────────┘
              ↓ HTTP
┌─────────────────────────────────────┐
│     CAPA DE APLICACIÓN              │
│   Node.js + Express 5.1             │
│   Lógica de negocio                 │
│   Gestión de sesiones               │
│   Puerto: 3000                      │
└─────────────────────────────────────┘
              ↓ SQL
┌─────────────────────────────────────┐
│     CAPA DE DATOS                   │
│   MySQL 3.14                        │
│   Tablas: users, products, orders   │
└─────────────────────────────────────┘
```

### 2.2 Funcionalidad del Producto

**Módulo de Autenticación:**
- Registro de nuevos usuarios
- Inicio de sesión con JWT
- Control de acceso por roles

**Módulo de Catálogo:**
- Listado de productos
- Búsqueda de productos
- Vista detallada de producto

**Módulo de Carrito:**
- Agregar productos al carrito
- Ver carrito
- Modificar cantidades
- Eliminar productos

**Módulo de Pedidos:**
- Crear pedidos desde carrito
- Visualizar historial de pedidos
- Cambiar estado de pedidos

**Módulo Administrativo:**
- CRUD de productos
- Gestión de usuarios
- Gestión de pedidos
- Dashboard con estadísticas

### 2.3 Características de Usuarios

**Usuario: Cliente**

| Campo | Detalle |
|-------|---------|
| **Responsabilidades** | Explorar productos, comprar, consultar pedidos |
| **Habilidades** | Uso básico de navegador web |
| **Frecuencia de uso** | Según necesidad |

**Usuario: Administrador**

| Campo | Detalle |
|-------|---------|
| **Responsabilidades** | Gestionar inventario, pedidos y usuarios |
| **Habilidades** | Gestión de sistemas |
| **Frecuencia de uso** | Diaria |

### 2.4 Restricciones

1. Base de datos: Exclusivamente MySQL
2. Backend: Node.js 18+ con Express 5.1
3. Frontend: HTML5, Bootstrap 5.3, JavaScript vanilla
4. Navegadores: Chrome 90+, Firefox 88+, Edge 90+
5. Tamaño máximo de imágenes: 5MB
6. Formatos soportados: jpg, jpeg, png, gif, webp

### 2.5 Suposiciones y Dependencias

**Suposiciones:**
- Node.js 18+ disponible en servidor
- MySQL accesible y configurado
- Conexión a internet estable
- Usuarios con navegador web moderno

**Dependencias:**
- mysql2 (driver MySQL)
- express (framework web)
- bcrypt (hashing)
- jsonwebtoken (autenticación)
- cors (CORS)
- dotenv (variables de entorno)

---

## 3. Requisitos Específicos

### 3.1 Requisitos Funcionales

<p align="center">
  <img src="../frontend/img/Golem.webp" alt="Requisitos Funcionales" width="110" height="110">
</p>

#### RF-01: Registro de Usuario

| Campo | Detalle |
|-------|---------|
| **Número** | RF-01 |
| **Título** | Registro de nuevo usuario |
| **Prioridad** | Alta |

**Descripción:** El sistema permite a un visitante crear una cuenta con nombre, email y contraseña.

**Endpoint:** `POST /api/register`

```javascript
// Frontend: frontend/js/register.js
document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  const response = await fetch('/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  });
  
  const data = await response.json();
  if (response.ok) {
    alert('Registro exitoso');
    window.location.href = '/index.html';
  }
});
```

**Criterios de Aceptación:**
- ✅ El visitante ingresa nombre, email y contraseña válidos
- ✅ El email no está registrado previamente
- ✅ La contraseña se encripta con bcrypt antes de almacenar
- ✅ Se crea la cuenta y se muestra mensaje de éxito

---

#### RF-02: Inicio de Sesión

| Campo | Detalle |
|-------|---------|
| **Número** | RF-02 |
| **Título** | Inicio de sesión |
| **Prioridad** | Alta |

**Descripción:** El usuario se autentica con email y contraseña, recibiendo un JWT.

**Endpoint:** `POST /api/login`

```javascript
// Backend: backend/controllers/authController.js
export const login = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }
    
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }
    
    const token = jwt.sign(
      { id: user.id, email: user.email, rol: user.rol },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.json({ message: 'Login exitoso', token, rol: user.rol });
  } catch (error) {
    res.status(500).json({ message: 'Error en servidor' });
  }
};
```

---

#### RF-03: Gestión de Productos

| Campo | Detalle |
|-------|---------|
| **Número** | RF-03 |
| **Título** | CRUD de productos |
| **Prioridad** | Alta |

**Descripción:** Los administradores pueden crear, leer, actualizar y eliminar productos.

**Endpoints:**
- `GET /api/productos` - Listar todos los productos
- `POST /api/productos` - Crear producto
- `GET /api/productos/:id` - Ver detalle
- `PUT /api/productos/:id` - Actualizar
- `DELETE /api/productos/:id` - Eliminar

---

#### RF-04: Visualización de Catálogo

| Campo | Detalle |
|-------|---------|
| **Número** | RF-04 |
| **Título** | Catálogo de productos público |
| **Prioridad** | Alta |

**Descripción:** Cualquier visitante puede ver el listado de productos disponibles.

---

#### RF-05: Búsqueda de Productos

| Campo | Detalle |
|-------|---------|
| **Número** | RF-05 |
| **Título** | Búsqueda de productos |
| **Prioridad** | Media |

**Descripción:** Los usuarios pueden buscar productos por nombre o descripción.

---

#### RF-06: Carrito de Compras

| Campo | Detalle |
|-------|---------|
| **Número** | RF-06 |
| **Título** | Gestión de carrito |
| **Prioridad** | Alta |

**Descripción:** Agregar, visualizar, modificar y eliminar productos del carrito.

---

#### RF-07: Crear Pedido

| Campo | Detalle |
|-------|---------|
| **Número** | RF-07 |
| **Título** | Crear pedido |
| **Prioridad** | Alta |

**Descripción:** El cliente puede convertir su carrito en un pedido.

---

#### RF-08: Historial de Pedidos

| Campo | Detalle |
|-------|---------|
| **Número** | RF-08 |
| **Título** | Ver historial de pedidos |
| **Prioridad** | Media |

**Descripción:** El cliente puede ver todos sus pedidos anteriores.

---

#### RF-09: Gestión de Usuarios (Admin)

| Campo | Detalle |
|-------|---------|
| **Número** | RF-09 |
| **Título** | CRUD de usuarios |
| **Prioridad** | Alta |

**Descripción:** Los administradores pueden gestionar usuarios del sistema.

---

#### RF-10: Dashboard Administrativo

| Campo | Detalle |
|-------|---------|
| **Número** | RF-10 |
| **Título** | Dashboard de estadísticas |
| **Prioridad** | Media |

**Descripción:** Los administradores ven estadísticas de ventas y actividad.

---

### 3.2 Requisitos No Funcionales

<p align="center">
  <img src="../frontend/img/Golem.webp" alt="Requisitos No Funcionales" width="110" height="110">
</p>

#### RNF-01: Seguridad de Contraseña

Las contraseñas deben encriptarse con bcrypt con un factor de 10 iteraciones mínimo.

#### RNF-02: Autenticación JWT

Los tokens JWT deben expirar en 7 días.

#### RNF-03: Validación de Datos

Todos los inputs deben validarse en cliente y servidor.

#### RNF-04: Control de Acceso

El acceso a rutas administrativas debe verificar rol="admin".

#### RNF-05: Respuesta del Sistema

Las APIs deben responder en menos de 2 segundos.

#### RNF-06: Disponibilidad

El sistema debe estar disponible 99% del tiempo.

#### RNF-07: Escalabilidad

La arquitectura debe soportar hasta 10,000 usuarios concurrentes.

#### RNF-08: Compatibilidad

El sistema debe funcionar en Chrome, Firefox, Edge y Safari versiones recientes.

---

### 3.3 Interfaces

#### 3.3.1 Interfaz de Usuario

- **Diseño responsivo** con Bootstrap 5.3
- **Paleta de colores**: Negro, blanco, dorado
- **Mensajes flash** para feedback al usuario

#### 3.3.2 Interfaz de API

| Método | Ruta | Autenticación |
|--------|------|--------------|
| POST | /api/register | No |
| POST | /api/login | No |
| GET | /api/productos | No |
| GET | /api/productos/:id | No |
| POST | /api/productos | JWT + Admin |
| PUT | /api/productos/:id | JWT + Admin |
| DELETE | /api/productos/:id | JWT + Admin |
| GET | /api/users | JWT + Admin |

---

## 4. Apéndices

### Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Node.js | 18+ | Runtime JavaScript |
| Express | 5.1.0 | Framework web |
| MySQL | 3.14.3 | Base de datos |
| Bcrypt | 6.0.0 | Hashing de contraseñas |
| JWT | 9.0.2 | Autenticación |
| Cors | 2.8.5 | CORS |
| Dotenv | 17.2.1 | Variables de entorno |
| Bootstrap | 5.3.x | Framework CSS |
| JavaScript | ES6+ | Lenguaje frontend |

---

**Fin del Documento**

<p align="center">
  <img src="../frontend/img/Golem.webp" alt="E-commerce Finalizado" width="100" height="100">
</p>
