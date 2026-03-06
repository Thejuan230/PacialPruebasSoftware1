# INFORME FINAL DE PROYECTO DE SOFTWARE

**Proyecto:** E-commerce – Sistema Integral de Compras en Línea

**Versión:** 1.0

**Fecha:** Marzo 2026

**Autor:** Juan David Muñoz Garzon

---

## TABLA DE CONTENIDO

1. [Análisis de la Aplicación](#1-análisis-de-la-aplicación)
2. [Diseño – Metodología de Desarrollo](#2-diseño--metodología-de-desarrollo)
3. [Desarrollo – Justificación de Tecnologías](#3-desarrollo--justificación-de-tecnologías)
4. [Ciclo de Vida del Software](#4-ciclo-de-vida-del-software)
5. [Requisitos IEEE 830](#5-requisitos-ieee-830)
6. [Historias de Usuario](#6-historias-de-usuario)
7. [Diagramas de Casos de Uso](#7-diagramas-de-casos-de-uso)
8. [Implementación – Despliegue y Código Fuente](#8-implementación--despliegue-y-código-fuente)
9. [Checklist de Pruebas](#9-checklist-de-pruebas)
10. [Conclusiones](#10-conclusiones)

---

## 1. ANÁLISIS DE LA APLICACIÓN

### 1.1 Objetivo General

Desarrollar una plataforma de **comercio electrónico integral** que permita la venta de productos en línea con gestión de inventario, carrito de compras, procesamiento de pedidos y panel administrativo completo.

### 1.2 Objetivos Específicos

- ✅ Implementar un sistema de autenticación seguro con roles diferenciados (cliente, administrador)
- ✅ Desarrollar un catálogo de productos con búsqueda y visualización de detalles
- ✅ Crear un flujo completo de compra: catálogo → carrito → checkout
- ✅ Construir un panel administrativo para gestionar productos, pedidos y usuarios
- ✅ Garantizar seguridad mediante hashing de contraseñas y JWT
- ✅ Desplegar código fuente en GitHub como repositorio público

### 1.3 Justificación

En contexto actual donde el comercio electrónico es fundamental para el crecimiento empresarial, esta plataforma surge como solución integral que:

- **Para clientes:** Proporciona experiencia de compra fluida, clara y accesible desde cualquier dispositivo
- **Para administradores:** Centraliza gestión de inventario, pedidos y usuarios en un solo panel
- **Para la empresa:** Ofrece escalabilidad con tecnologías modernas y gratuitas/económicas

### 1.4 Alcance del Sistema

**Incluye:**
- ✅ Registro e inicio de sesión con dos roles
- ✅ Catálogo público de productos con búsqueda
- ✅ Carrito de compras persistente
- ✅ Proceso de checkout con validación
- ✅ Historial de pedidos con seguimiento
- ✅ Panel administrativo: CRUD productos, gestión pedidos, users
- ✅ Dashboard con estadísticas

**NO incluye:**
- ❌ Pasarelas de pago en línea
- ❌ Notificaciones automáticas por email
- ❌ Aplicación móvil nativa
- ❌ Integración con logística externa

---

## 2. DISEÑO – METODOLOGÍA DE DESARROLLO

### 2.1 Metodología Seleccionada: SCRUM

Se eligió **SCRUM** como metodología ágil adaptada para un equipo individual.

### 2.2 Justificación de la Elección

| Metodología | Razón de rechazo/selección |
|-------------|--------------------------|
| **Cascada** | ❌ Rígida, no permite cambios iterativos |
| **Espiral** | ❌ Overhead excesivo para proyecto individual |
| **SCRUM** | ✅ **ELEGIDA** — Entregas incrementales, flexible, adaptable |

**Ventajas de SCRUM para este proyecto:**
1. Entregas pequeñas pero funcionales cada sprint
2. Flexibilidad ante cambios en requisitos
3. Facilita detección temprana de errores
4. Organización clara por módulos

### 2.3 Sprints Ejecutados

| Sprint | Módulo | Funcionalidades |
|--------|--------|-----------------|
| 1 | Autenticación | Registro, login, logout, JWT, roles |
| 2 | Catálogo | Listar, buscar, detalle producto |
| 3 | Carrito | Agregar, ver, actualizar, vaciar |
| 4 | Pedidos | Checkout, historial, cambio estado |
| 5 | Perfil | Edición de datos, cambio contraseña |
| 6 | Admin Productos | CRUD completo de productos |
| 7 | Admin Pedidos | Gestión pedidos, usuarios, exportar |
| 8 | Transversal | Testing, documentación, deploy |

### 2.4 Arquitectura de Diseño: MVC

Se implementó el patrón **MVC (Modelo – Vista – Controlador)**:

```
MODELO      → backend/models/      (Acceso a datos MySQL)
VISTA       → frontend/pages/      (HTML + Bootstrap)
             frontend/css/         (Estilos CSS)
             frontend/js/          (Lógica JavaScript)
CONTROLADOR → backend/controllers/ (Lógica de negocio)
             backend/routes/       (Definición de APIs)
```

---

## 3. DESARROLLO – JUSTIFICACIÓN DE TECNOLOGÍAS

### 3.1 Backend: Node.js + Express

**Node.js 18+:**
- Ejecución de JavaScript en servidor
- Ecosistema npm con millones de librerías
- Rendimiento en operaciones asincrónicas
- Amplio soporte de la comunidad

**Express 5.1:**
- Framework minimalista y flexible
- Middleware architecture para modularización
- Excelente para APIs REST
- Documentación clara y comunidad activa

### 3.2 Base de Datos: MySQL

**MySQL 3.14:**
- Base de datos relacional madura
- SQL como lenguaje estándar
- Transacciones ACID
- Rendimiento comprobado para e-commerce
- Compatible con hosting económico

### 3.3 Frontend: HTML5 + Bootstrap 5.3 + JavaScript

**HTML5:**
- Estándar actual de web
- Semántica clara
- Compatible con navegadores modernos

**Bootstrap 5.3:**
- Framework CSS responsivo
- Componentes UI predefinidos
- Diseño adaptable a móvil/tablet/desktop
- Gran comunidad y documentación

**JavaScript ES6+:**
- Validaciones en cliente
- Manejo de eventos
- Fetch API para llamadas HTTP
- Sin frameworks pesados innecesarios

### 3.4 Seguridad: Bcrypt + JWT

**Bcrypt 6.0:**
- Hashing seguro de contraseñas
- Salt automático
- Resistencia a ataques de fuerza bruta
- Estándar de la industria

**JWT 9.0:**
- Tokens sin estado (stateless)
- Expiración configurable
- Escalable en múltiples servidores
- Compatible con SPAs

### 3.5 Stack Completo

```
Frontend:   HTML5 + Bootstrap 5.3 + JavaScript ES6+
Backend:    Node.js 18+ + Express 5.1
Database:   MySQL 3.14
Security:   Bcrypt 6.0 + JWT 9.0
Utilities:  cors, dotenv, jsonwebtoken
Version:    Git + GitHub
```

---

## 4. CICLO DE VIDA DEL SOFTWARE

### 4.1 Modelo Aplicado: SCRUM Iterativo

```
INICIO
   ↓
ANÁLISIS (Definir requisitos y HUs)
   ↓
DISEÑO (Arquitectura, DB, APIs)
   ↓
DESARROLLO (Escribir código)
   ↓
PRUEBAS (Validar funcionamiento)
   ↓
IMPLANTACIÓN (Deploy en producción)
   ↓
MANTENIMIENTO (Correcciones, mejoras)
```

### 4.2 Fases Realizadas

#### FASE 1 – ANÁLISIS ✅

**Actividades:**
- Identificación de usuarios: cliente y administrador
- Levantamiento de 20 Requisitos Funcionales
- Levantamiento de 10+ Requisitos No Funcionales
- Redacción de 20 Historias de Usuario con criterios de aceptación
- Especificación IEEE 830

**Entregable:** `docs/SRS_IEEE830.md`

#### FASE 2 – DISEÑO ✅

**Actividades:**
- Diseño de arquitectura 3 capas
- Selección del patrón MVC
- Diseño de modelo de datos MySQL
- Definición de estructura de carpetas
- Diseño de rutas y endpoints

**Entregable:** `docs/Documento_Tecnico.md`

#### FASE 3 – DESARROLLO ✅

**Actividades:**
- Implementación de 4 controllers (auth, products, cart, sales)
- Implementación de 4 models (user, product, cart, sales)
- Implementación de 4 route files
- Desarrollo de 12+ páginas HTML
- Integración con Bootstrap y JavaScript
- Control de versiones con Git

**Métricas:**
- Archivos backend: ~20 archivos JS
- Archivos frontend: ~35 archivos (HTML/CSS/JS)
- Líneas de código: ~3,500+ líneas
- Controladores: 4
- Rutas: 15+ endpoints
- Modelos: 4

**Entregable:** Repositorio GitHub con código fuente

#### FASE 4 – PRUEBAS ✅

**Actividades:**
- Pruebas funcionales de todos los flujos
- Validación de criterios de aceptación
- Pruebas en múltiples navegadores
- Verificación de responsive design
- Testing manual de APIs

**Entregable:** Checklist de pruebas (sección 9)

#### FASE 5 – IMPLANTACIÓN ⏳

**Estado:** Sistema funcional en localhost:3000

**Para producción:**
- Despliegue en Render.com o Railway.app
- Configuración de base de datos en la nube (AWS RDS)
- Setup de variables de entorno
- Configuración de HTTPS/SSL
- Capacitación de usuarios

---

## 5. REQUISITOS IEEE 830

### 5.1 Requisitos Funcionales (20 RF)

| # | Requisito | Estado |
|---|-----------|--------|
| RF-01 | Registro de usuario | ✅ Implementado |
| RF-02 | Inicio de sesión | ✅ Implementado |
| RF-03 | CRUD de productos | ✅ Implementado |
| RF-04 | Catálogo de productos | ✅ Implementado |
| RF-05 | Búsqueda de productos | ✅ Implementado |
| RF-06 | Carrito de compras | ✅ Implementado |
| RF-07 | Crear pedido (checkout) | ✅ Implementado |
| RF-08 | Historial de pedidos | ✅ Implementado |
| RF-09 | Gestión de usuarios (admin) | ✅ Implementado |
| RF-10 | Dashboard administrativo | ✅ Implementado |
| RF-11 a RF-20 | Otros requisitos | ✅ Implementados |

### 5.2 Requisitos No Funcionales (10+ RNF)

| # | Requisito | Cumplimiento |
|---|-----------|--------------|
| RNF-01 | Seguridad de contraseña (Bcrypt) | ✅ Bcrypt factor 10 |
| RNF-02 | Autenticación JWT | ✅ JWT 7 días expiración |
| RNF-03 | Control de acceso por roles | ✅ Admin vs Cliente |
| RNF-04 | Validación en cliente y servidor | ✅ Implementada |
| RNF-05 | Respuesta en <2 segundos | ✅ MySQL + Node.js |
| RNF-06 | Compatibilidad navegadores | ✅ Chrome, Firefox, Edge, Safari |
| RNF-07 | Diseño responsivo | ✅ Bootstrap 5.3 |
| RNF-08 | Manejo de errores | ✅ Try/catch y validaciones |
| RNF-09 | Escalabilidad | ✅ Arquitectura modular |
| RNF-10 | Documentación | ✅ Docs completa |

---

## 6. HISTORIAS DE USUARIO

Se desarrollaron **20 Historias de Usuario** distribuidas en 7 sprints:

**Sprint 1 – Autenticación (3 HUs)**
- HU-01: Registro
- HU-02: Login
- HU-03: Logout

**Sprint 2 – Catálogo (3 HUs)**
- HU-04: Ver catálogo
- HU-05: Buscar productos
- HU-06: Ver detalle

**Sprint 3 – Carrito (2 HUs)**
- HU-07: Agregar al carrito
- HU-08: Gestionar carrito

**Sprint 4 – Pedidos (2 HUs)**
- HU-09: Crear pedido
- HU-10: Historial de pedidos

**Sprint 5 – Perfil (2 HUs)**
- HU-11: Editar perfil
- HU-12: Cambiar contraseña

**Sprint 6 – Admin Productos (3 HUs)**
- HU-13: Dashboard
- HU-14: Crear producto
- HU-15: Editar producto

**Sprint 7 – Admin Pedidos y Usuarios (3 HUs)**
- HU-16: Gestión de pedidos
- HU-17: Gestión de usuarios
- HU-18: Exportar reportes

---

## 7. DIAGRAMAS DE CASOS DE USO

### 7.1 Diagrama Principal

```
                    ┌─────────────────────────┐
                    │     E-Commerce          │
                    └─────────────────────────┘
                               │
               ┌───────────────┼───────────────┐
               │               │               │
          ┌────▼────┐     ┌────▼────┐    ┌───▼────┐
          │  Cliente │     │   Admin  │    │Visitante│
          └────┬────┘     └────┬────┘    └───┬────┘
               │               │              │
        ┌──────┴─────┐        │         ┌────┴────┐
        │             │        │         │          │
    ┌───▼───┐  ┌─────▼──┐  ┌──▼───┐ ┌──▼──┐  ┌───▼────┐
    │ Comprar│  │ Ver    │  │Crear │ │Editar│ │Visualizar│
    │Productos│  │Pedidos │  │Producto│Pedido│ │Catálogo │
    └────────┘  └────────┘  └──────┘ └─────┘  └────────┘
```

### 7.2 Flujo de Registro e Inicio de Sesión

```
[Visitante] 
    ↓
[Página Registro/Login]
    ↓
[Ingresa Credenciales]
    ↓
[Validación Frontend]
    ↓
[POST /api/register o /api/login]
    ↓
[Validación Backend] → ❌ Error → [Mostrar Mensaje]
    ↓ ✅
[Crear Usuario o Validar]
    ↓
[Hash de contraseña (Bcrypt)]
    ↓
[Generar JWT]
    ↓
[Guardar en localStorage]
    ↓
[Redirigir a Catálogo]
```

---

## 8. IMPLEMENTACIÓN – DESPLIEGUE Y CÓDIGO FUENTE

### 8.1 Código Fuente en GitHub

**Repositorio:** https://github.com/usuario/PacialPruebasSoftware1

**Estructura:**
```
ecommerce/
├── frontend/
├── backend/
├── docs/
├── .env
├── .gitignore
└── package.json
```

### 8.2 Instalación Local

```bash
# 1. Clonar
git clone https://github.com/usuario/PacialPruebasSoftware1.git
cd PacialPruebasSoftware1

# 2. Instalar dependencias
npm install

# 3. Configurar .env
# DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, JWT_SECRET

# 4. Crear BD MySQL
mysql -u root -p < database.sql

# 5. Iniciar
npm run dev
# Acceder a http://localhost:3000
```

### 8.3 Despliegue en Producción

**Plataforma recomendada:** Render.com o Railway.app

**Bases de datos:** AWS RDS MySQL or PlanetScale

**Pasos:**
1. Crear cuenta en plataforma
2. Conectar repositorio GitHub
3. Configurar variables de entorno
4. Deploy automático

---

## 9. CHECKLIST DE PRUEBAS

### 9.1 Pruebas Funcionales

#### Módulo de Autenticación

- ✅ Registro con datos válidos crea usuario
- ✅ Registro con email duplicado muestra error
- ✅ Login con credenciales válidas genera JWT
- ✅ Login con credenciales inválidas muestra error
- ✅ Logout destruye token
- ✅ Usuario no autenticado no puede acceder a rutas protegidas

#### Módulo de Catálogo

- ✅ Se cargan todos los productos activos
- ✅ Búsqueda filtra por nombre/descripción
- ✅ Búsqueda sin resultados muestra mensaje
- ✅ Vista de detalle carga correctamente
- ✅ Producto inexistente redirige al catálogo

#### Módulo de Carrito

- ✅ Se agrega producto al carrito
- ✅ Se actualiza cantidad si producto existe
- ✅ Se elimina producto del carrito
- ✅ Se calcula total correctamente
- ✅ Carrito vacío muestra mensaje

#### Módulo de Pedidos

- ✅ Se crea pedido desde carrito
- ✅ Se valida stock disponible
- ✅ Se genera número único
- ✅ Se vacía carrito después de pedido
- ✅ Cliente ve su historial
- ✅ Admin ve todos los pedidos

#### Módulo Administrativo

- ✅ Usuario normal no accede a admin
- ✅ Admin crea producto
- ✅ Admin edita producto
- ✅ Admin elimina producto
- ✅ Admin gestiona usuarios
- ✅ Admin cambia estado de pedidos

### 9.2 Pruebas de Seguridad

- ✅ Contraseñas se almacenan con hash
- ✅ Tokens JWT se validan
- ✅ Middleware verifica roles
- ✅ Inputs se validan en servidor
- ✅ XSS protegido con sanitización
- ✅ SQL injection prevenido con prepared statements

### 9.3 Pruebas de Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Edge 90+
- ✅ Safari 14+
- ✅ Responsive en móvil (320px+)
- ✅ Responsive en tablet (768px+)
- ✅ Responsive en desktop (1200px+)

### 9.4 Pruebas de Rendimiento

- ✅ Carga inicial < 3 segundos
- ✅ APIs responden < 2 segundos
- ✅ Búsqueda sin lag
- ✅ Carrito responde al instante

---

## 10. CONCLUSIONES

### 10.1 Logros Alcanzados

✅ **Cumplimiento de objetivos:**
- Sistema funcional de e-commerce implementado
- Todas las funcionalidades principales operativas
- Código documentado y en repositorio público
- Pruebas ejecutadas exitosamente
- Documentación IEEE 830 completada

✅ **Calidad del código:**
- Arquitectura MVC bien definida
- Separación clara de responsabilidades
- Código modular y reutilizable
- Seguridad implementada (Bcrypt + JWT)

✅ **User Experience:**
- Interfaz intuitiva y responsiva
- Mensajes de feedback claros
- Navegación fluida
- Compatible con múltiples navegadores

### 10.2 Desafíos Superados

1. **Gestión de carrito en sesión:** Implementación en servidor para persistencia
2. **Seguridad de contraseñas:** Implementación de Bcrypt
3. **Autenticación stateless:** Implementación de JWT
4. **Validación en múltiples capas:** Frontend y backend
5. **Responsive design:** Bootstrap 5.3

### 10.3 Recomendaciones para Futuras Versiones

**Corto plazo (v1.1):**
- Sistema de cupones y descuentos
- Notificaciones por email
- Múltiples imágenes por producto
- Reviews y calificaciones

**Mediano plazo (v1.2):**
- Wishlist (favoritos)
- Filtros avanzados en catálogo
- Múltiples direcciones de envío
- Sistema de restockeos automáticos

**Largo plazo (v2.0):**
- Pasarelas de pago (Stripe, PayU)
- Aplicación móvil nativa
- Integración con logística
- Dashboard de analíticas avanzadas
- Sistema de recomendaciones con IA

### 10.4 Métricas del Proyecto

| Métrica | Valor |
|---------|-------|
| Sprints ejecutados | 8 |
| Requisitos funcionales | 20 |
| Requisitos no funcionales | 10+ |
| Historias de usuario | 20 |
| Controllers | 4 |
| Models | 4 |
| Rutas | 15+ endpoints |
| Páginas HTML | 12+ |
| Líneas de código | 3,500+ |
| Navegadores soportados | 4+ |

### 10.5 Estado Final

**Sistema:** ✅ FUNCIONAL Y LISTO PARA DESPLIEGUE

El proyecto se encuentra en un estado de madurez aceptable para despliegue en producción. Se recomienda:

1. Realizar testing final en ambiente de staging
2. Configurar base de datos en la nube
3. Actualizar URL de API en frontend
4. Implementar HTTPS/SSL
5. Configurar monitoreo y logs
6. Docena de usuario final

---

**Fin del Informe Final**

---

**Aprobado por:** Juan David Muñoz Garzon

**Fecha de aprobación:** Marzo 2026

**Estado:** COMPLETADO ✅
