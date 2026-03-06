# DOCUMENTO TÉCNICO

**Proyecto: E-commerce – Sistema Integral de Compras en Línea**

**Versión:** 1.0

**Fecha:** Marzo 2026

**Autor:** Juan Carlos

---

## TABLA DE CONTENIDO

1. [Arquitectura y Diseño](#1-arquitectura-y-diseño)
2. [Justificación de Tecnologías](#2-justificación-de-tecnologías)
3. [Estructura del Proyecto](#3-estructura-del-proyecto)
4. [Base de Datos](#4-base-de-datos)
5. [APIs y Endpoints](#5-apis-y-endpoints)
6. [Flujos Principales](#6-flujos-principales)
7. [Seguridad](#7-seguridad)
8. [Guía de Instalación y Despliegue](#8-guía-de-instalación-y-despliegue)

---

## 1. ARQUITECTURA Y DISEÑO

### 1.1 Patrón de Arquitectura: MVC + Servicios

```
Frontend Layer (HTML/CSS/JS)
        ↓ HTTP
API Layer (Express Routes)
        ↓
Business Logic (Controllers)
        ↓
Data Access (Models)
        ↓
Database (MySQL)
```

### 1.2 Componentes Principales

**Frontend:**
- `frontend/pages/` - Páginas HTML
- `frontend/js/` - Lógica JavaScript
- `frontend/css/` - Estilos Bootstrap

**Backend:**
- `backend/routes/` - Definición de endpoints
- `backend/controllers/` - Lógica de negocio
- `backend/models/` - Acceso a datos
- `backend/config/` - Configuración (DB)
- `backend/middleware/` - Autenticación y validación

**Configuración:**
- `package.json` - Dependencias Node.js
- `.env` - Variables de entorno
- `server.js` - Punto de entrada

### 1.3 Flujo de Datos

```
Usuario → Frontend (HTML) → Evento JavaScript
                         ↓
                    Fetch API
                         ↓
                    Server (Express)
                         ↓
                  Validación + Lógica
                         ↓
                    Base de Datos
                         ↓
                   Respuesta JSON
```

---

## 2. JUSTIFICACIÓN DE TECNOLOGÍAS

### 2.1 Backend: Node.js + Express

**Por qué Node.js:**
- Ecosistema npm con miles de paquetes
- JavaScript full-stack (mismo lenguaje frontend)
- Manejo eficiente de operaciones asincrónicas
- Buena curva de aprendizaje

**Por qué Express:**
- Framework minimalista y flexible
- Middleware arquitecture bien diseñada
- Amplio soporte de la comunidad
- Fácil de testear

### 2.2 Base de Datos: MySQL

**Por qué MySQL:**
- Relaciones bien definidas entre tablas
- Transacciones ACID
- SQL es estándar de la industria
- Rendimiento probado para e-commerce

**Alternativas consideradas:**
- ❌ MongoDB: Menos adecuado para relaciones complejas
- ❌ PostgreSQL: Overkill para este proyecto

### 2.3 Frontend: HTML5 + Bootstrap + Vanilla JavaScript

**Por qué HTML5 + Bootstrap:**
- Diseño responsivo automático
- Componentes de UI listos para usar
- Curva de aprendizaje suave
- Sin dependencias complejas

**Por qué JavaScript Vanilla:**
- No necesitamos React o Vue para esta complejidad
- Menor tamaño de bundle
- Control total sobre el código

### 2.4 Autenticación: JWT + Bcrypt

**JWT (JSON Web Tokens):**
- Stateless: no requiere sesiones en servidor
- Escalable para múltiples servidores
- Compatible con APIs REST

**Bcrypt:**
- Hashing seguro con salt automático
- Resistencia a ataques de fuerza bruta
- Estándar de la industria

---

## 3. ESTRUCTURA DEL PROYECTO

```
ecommerce/
├── frontend/
│   ├── pages/
│   │   ├── index.html          (Página de inicio)
│   │   ├── catalogo.html       (Catálogo de productos)
│   │   ├── productos.html      (Detalle de produto)
│   │   ├── carrito.html        (Carrito de compras)
│   │   ├── checkout.html       (Confirmación pedido)
│   │   ├── login.html          (Inicio de sesión)
│   │   ├── register.html       (Registro)
│   │   ├── cliente.html        (Perfil cliente)
│   │   ├── admin.html          (Dashboard admin)
│   │   ├── users.html          (Gestión usuarios)
│   │   ├── ventas.html         (Historial cliente)
│   │   └── ventasAdmin.html    (Gestión pedidos)
│   ├── css/
│   │   ├── style.css           (Estilos principales)
│   │   ├── catalogo.css        (Estilos catálogo)
│   │   ├── dashboard.css       (Estilos admin)
│   │   ├── user.css            (Estilos perfil)
│   │   └── ventas.css          (Estilos pedidos)
│   └── js/
│       ├── login.js            (Lógica login)
│       ├── register.js         (Lógica registro)
│       ├── catalogo.js         (Lógica catálogo)
│       ├── producto.js         (Lógica detalle)
│       ├── carrito.js          (Lógica carrito)
│       ├── cliente.js          (Lógica perfil)
│       ├── navigation.js       (Navegación)
│       ├── ventas.js           (Historial)
│       ├── adminVentas.js      (Gestión pedidos)
│       ├── users.js            (Gestión usuarios)
│       └── producto.js         (Gestión productos)
├── backend/
│   ├── server.js               (Punto de entrada)
│   ├── config/
│   │   └── db.js               (Pool de conexión MySQL)
│   ├── controllers/
│   │   ├── authController.js   (Registro, login, usuarios)
│   │   ├── productController.js (CRUD productos)
│   │   ├── carritoController.js (Gestión carrito)
│   │   └── ventasController.js  (Gestión pedidos)
│   ├── models/
│   │   ├── userModel.js        (Consultas usuarios)
│   │   ├── productModel.js     (Consultas productos)
│   │   ├── carritoModel.js     (Gestión carrito)
│   │   └── ventasModel.js      (Consultas pedidos)
│   ├── routes/
│   │   ├── authRoutes.js       (Rutas autenticación)
│   │   ├── productRoutes.js    (Rutas productos)
│   │   ├── carritosRoutes.js   (Rutas carrito)
│   │   └── ventasRoutes.js     (Rutas pedidos)
│   └── middleware/
│       └── authMiddleware.js   (Verificación JWT, roles)
├── package.json                (Dependencias)
├── .env                        (Variables de entorno)
└── docs/                       (Documentación)
```

---

## 4. BASE DE DATOS

### 4.1 Modelo de Datos

```sql
-- Tabla de Usuarios
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  rol ENUM('cliente', 'admin') DEFAULT 'cliente',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Productos
CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(150) NOT NULL,
  description TEXT,
  price FLOAT NOT NULL,
  stock INT NOT NULL DEFAULT 0,
  category VARCHAR(100),
  image_url VARCHAR(255),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Carrito (temporal en sesión)
-- Nota: Se mantiene en sesión del servidor, no en BD

-- Tabla de Pedidos
CREATE TABLE orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  total FLOAT NOT NULL,
  status ENUM('pendiente', 'confirmado', 'enviado', 'entregado') DEFAULT 'pendiente',
  items JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### 4.2 Relaciones

```
users (1) ──── (N) orders
products (N) ──── (N) orders (a través de items JSON)
```

---

## 5. APIs Y ENDPOINTS

### 5.1 Autenticación

| Método | Endpoint | Autenticación | Rol |
|--------|----------|--------------|-----|
| POST | `/api/register` | No | Todos |
| POST | `/api/login` | No | Todos |
| GET | `/api/users` | JWT | Admin |
| DELETE | `/api/users/:id` | JWT | Admin |
| PUT | `/api/users/:id` | JWT | Admin |

### 5.2 Productos

| Método | Endpoint | Autenticación | Rol |
|--------|----------|--------------|-----|
| GET | `/api/productos` | No | Todos |
| GET | `/api/productos/:id` | No | Todos |
| POST | `/api/productos` | JWT | Admin |
| PUT | `/api/productos/:id` | JWT | Admin |
| DELETE | `/api/productos/:id` | JWT | Admin |

### 5.3 Carrito

| Método | Endpoint | Autenticación | Rol |
|--------|----------|--------------|-----|
| POST | `/api/carrito/agregar` | No | Todos |
| GET | `/api/carrito` | No | Todos |
| DELETE | `/api/carrito/:id` | No | Todos |
| PUT | `/api/carrito/:id` | No | Todos |

### 5.4 Pedidos

| Método | Endpoint | Autenticación | Rol |
|--------|----------|--------------|-----|
| POST | `/api/ventas/crear` | JWT | Cliente |
| GET | `/api/ventas/:id` | JWT | Cliente |
| GET | `/api/ventas` | JWT | Admin |
| PUT | `/api/ventas/:id` | JWT | Admin |

---

## 6. FLUJOS PRINCIPALES

### 6.1 Flujo de Registro

```
1. Usuario ingresa nombre, email, password
2. Frontend valida formato
3. POST /api/register
4. Backend valida si email existe
5. Hash de contraseña con bcrypt
6. Insertar en DB
7. Respuesta de éxito
8. Redirigir a login
```

### 6.2 Flujo de Login

```
1. Usuario ingresa email y password
2. POST /api/login
3. Backend busca usuario por email
4. Compara password con bcrypt
5. Genera JWT con expiración 7 días
6. Retorna token + rol
7. Frontend almacena token en localStorage
8. Redirigir según rol (cliente → catálogo, admin → dashboard)
```

### 6.3 Flujo de Compra

```
1. Usuario explora catálogo
2. Selecciona producto y cantidad
3. Click "Agregar al Carrito"
4. POST /api/carrito/agregar
5. Backend valida stock
6. Almacena en sesión del servidor
7. Actualiza contador visual
8. Usuario va a /carrito
9. Revisa items y total
10. Click "Proceder a Checkout"
11. POST /api/ventas/crear
12. Backend crea orden en BD
13. Reduce stock de productos
14. Vacía carrito
15. Muestra confirmación
```

---

## 7. SEGURIDAD

### 7.1 Autenticación y Autorización

```javascript
// middleware/authMiddleware.js
export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Token requerido' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user.rol !== 'admin') {
    return res.status(403).json({ error: 'Acceso denegado' });
  }
  next();
};
```

### 7.2 Encriptación de Contraseñas

```javascript
// Creación
const hash = await bcrypt.hash(password, 10);

// Verificación
const match = await bcrypt.compare(password, hash);
```

### 7.3 Validación de Inputs

```javascript
// Frontend
function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Backend
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  return res.status(400).json({ error: 'Email inválido' });
}
```

### 7.4 Variables de Entorno

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=***
DB_NAME=ecommerce
JWT_SECRET=tu_secreto_seguro_aqui
PORT=3000
```

---

## 8. GUÍA DE INSTALACIÓN Y DESPLIEGUE

### 8.1 Requisitos Previos

- Node.js 18+
- MySQL 8.0+
- npm o yarn
- Editor de código (VS Code)
- Git

### 8.2 Instalación Local

```bash
# 1. Clonar repositorio
git clone https://github.com/usuario/ecommerce.git
cd ecommerce

# 2. Instalar dependencias
npm install

# 3. Crear base de datos MySQL
mysql -u root -p < database.sql

# 4. Configurar .env
cp .env.example .env
# Editar .env con credenciales locales

# 5. Iniciar servidor
npm run dev

# Servidor en http://localhost:3000
```

### 8.3 Base de Datos

```bash
# Crear base de datos
mysql -u root -p
CREATE DATABASE ecommerce;
USE ecommerce;
SOURCE database.sql;
```

### 8.4 Variables de Entorno (.env)

```
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=ecommerce
JWT_SECRET=tu_secreto_muy_seguro_aqui_cambiar_en_produccion
```

### 8.5 Despliegue en Producción

**Opciones recomendadas:**
- Render.com
- Railway.app
- Heroku
- DigitalOcean App Platform

**Pasos generales:**
1. Crear cuenta en plataforma de hosting
2. Conectar repositorio GitHub
3. Configurar variables de entorno
4. Configurar base de datos MySQL en la nube (AWS RDS, PlanetScale)
5. Deploy automático

---

## 9. STACK TECNOLÓGICO COMPLETO

| Categoría | Tecnología | Versión |
|-----------|-----------|---------|
| Runtime | Node.js | 18.0+ |
| Framework Web | Express | 5.1.0 |
| Base Datos | MySQL | 3.14.3 |
| Seguridad | Bcrypt | 6.0.0 |
| Autenticación | JWT | 9.0.2 |
| CORS | cors | 2.8.5 |
| ENV | dotenv | 17.2.1 |
| Frontend | Bootstrap | 5.3.x |
| Templating | HTML5 | - |
| Estilo | CSS3 | - |
| Scripting | JavaScript | ES6+ |

---

**Fin del Documento Técnico**
