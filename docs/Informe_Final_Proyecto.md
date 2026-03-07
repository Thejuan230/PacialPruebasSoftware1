# INFORME FINAL DEL PROYECTO DE SOFTWARE

## TABLA DE CONTENIDO

1. Análisis de la Aplicación
2. Diseño – Metodología de Desarrollo
3. Desarrollo – Justificación de Tecnologías
4. Ciclo de Vida del Software
5. Requisitos IEEE830
6. Historias de Usuario
7. Diagramas de Casos de Uso
8. Implementación – Despliegue y Código Fuente
9. Checklist de Pruebas
10. Plan de Capacitación
11. Conclusiones
12. Referencias

---

## 1. Análisis de la Aplicación

### 1.1 Objetivo General

Desarrollar una aplicación web de comercio electrónico que permita a los
usuarios comprar productos en línea mediante un catálogo, gestionando
carritos y pedidos, con roles diferenciados para clientes y administradores.

### 1.2 Objetivos Específicos

- Implementar un sistema de autenticación seguro con hashing de
  contraseñas y control de acceso por roles.
- Crear un catálogo de productos con búsqueda, filtros y gestión de stock.
- Desarrollar la funcionalidad de carrito de compras persistente en
  sesión.
- Permitir al cliente realizar pedidos y consultar su historial.
- Proporcionar un panel administrativo para CRUD de productos, gestión de
  pedidos y visualización de estadísticas.
- Garantizar la seguridad de los datos y la integridad de las operaciones.

### 1.3 Justificación

En el contexto actual, las pymes y emprendedores necesitan una solución
económica y fácil de usar para vender productos en línea. El proyecto
actual resuelve esta necesidad proporcionando una plataforma basada en
tecnologías JavaScript (Node.js/Express) y MySQL, que es accesible y
fácil de desplegar. El sistema centraliza la gestión del inventario y de
los pedidos, reemplazando el uso de hojas de cálculo y mensajes por
WhatsApp.

### 1.4 Alcance del Sistema

Incluye:
- Registro e inicio de sesión de usuarios con roles cliente/administrador.
- Catálogo público de productos con búsqueda por texto.
- Gestión de carrito y proceso de checkout.
- Generación de pedidos y registro en la base de datos.
- Historial de pedidos para clientes.
- Panel administrativo con funcionalidades de CRUD y estadísticas.

No incluye:
- Integración con pasarelas de pago.
- Notificaciones por correo electrónico.
- Aplicación móvil nativa.
- Integraciones con servicios logísticos externos.

---

## 2. Diseño – Metodología de Desarrollo

### 2.1 Metodología seleccionada: SCRUM adaptado

Se adoptó una versión ligera de SCRUM adecuada para un desarrollador
individual. Las tareas se organizaron en sprints con entregables parciales.

### 2.2 Justificación de la elección

La metodología SCRUM fue elegida por permitir entregas incrementales,
flexibilidad ante cambios y una organización clara del trabajo por
módulos. Estas características se adecuan bien al alcance del proyecto y
facilitan la documentación y las pruebas en cada fase.

### 2.3 Sprints ejecutados

| Sprint | Módulo desarrollado        | Funcionalidades clave
|--------|---------------------------|----------------------
| 1      | Autenticación             | Registro, login, logout
| 2      | Catálogo                  | Listado, búsqueda, detalle
| 3      | Carrito                   | Agregar, ver, actualizar
| 4      | Pedidos                   | Checkout, historial
| 5      | Perfil                    | Edición de datos
| 6      | Admin – Productos         | CRUD con imágenes
| 7      | Admin – Pedidos           | Gestión, estados, exportar
| 8      | Transversal               | Control de stock, pruebas

### 2.4 Arquitectura de diseño: MVC + Servicios

Patrón MVC con carpeta adicional para servicios. La estructura general
queda así:

```
backend/
  routes/       (endpoints Express)
  controllers/  (lógica de negocio)
  models/       (acceso a datos MySQL)
  middleware/   (auth y validaciones)
frontend/       (páginas HTML, CSS, JS)
```

El diseño separa claramente presentación, lógica y persistencia.

---

## 3. Desarrollo – Justificación de Tecnologías

### 3.1 Lenguaje de programación: JavaScript (Node.js 18+)

Elegido por la posibilidad de usar el mismo lenguaje en backend y
frontend, amplia comunidad, y excelente manejo de I/O asíncrono.

### 3.2 Framework web: Express 5.1

Microframework ligero que facilita la creación de APIs REST y admite
middleware componible. Es ideal para aplicaciones CRUD como la actual.

### 3.3 Base de datos: MySQL

Proporciona integridad referencial, transacciones ACID y es adecuado para
las relaciones entre usuarios, productos y pedidos. Se utiliza el paquete
`mysql2` para la conexión.

### 3.4 Frontend: HTML5 + Bootstrap 5.3 + JavaScript Vanilla

Bootstrap facilita un diseño responsivo sin complejidad. No fue necesario
usar frameworks de frontend pesados.

### 3.5 Seguridad: Bcrypt + JWT

Bcrypt para hashing de contraseñas y JWT para autenticación sin sesiones
servidor, permitiendo escalabilidad y fácil verificación de roles.

---

## 4. Ciclo de Vida del Software

El proyecto siguió un modelo iterativo basado en SCRUM. Cada fase se
completó con entregables específicos:

1. **Análisis:** Recolección de requisitos y SRS (ver docs/SRS_IEEE830.md)
2. **Diseño:** Arquitectura MVC, diagramas de casos de uso.
3. **Desarrollo:** Implementación de modelos, controladores y vistas.
4. **Implementación (Pruebas):** Unitarias con `jest`/`supertest` y pruebas
   funcionales manuales.
5. **Implantación:** Despliegue en entorno local y preparación para
   despliegue en servicios como Heroku o Render.

---

## 5. Requisitos IEEE830

Los requisitos funcionales y no funcionales están documentados en
`docs/SRS_IEEE830.md`. Entre los principales RF se encuentran:

- RF-01: Registro de usuario con hashing de contraseña.
- RF-02: Inicio y cierre de sesión seguros.
- RF-04: Catálogo público con búsqueda.
- RF-06: Añadir producto al carrito verificando stock.
- RF-08: Proceso de checkout y creación de pedido.

(El archivo completo contiene 20 RF con descripciones detalladas.)

---

## 6. Historias de Usuario

Las historias usadas para guiar el desarrollo incluyen ejemplos como:

- "Como cliente quiero registrarme para poder comprar productos."
- "Como cliente quiero buscar productos por nombre para encontrar lo que
  necesito."
- "Como administrador quiero añadir nuevos productos con imagen y stock
  para mantener el catálogo actualizado."
- "Como administrador quiero ver y cambiar el estado de los pedidos."

Cada historia cuenta con criterios de aceptación, está registrada en
`docs/HU.md`.

---

## 7. Diagramas de Casos de Uso

Se elaboraron diagramas UML que muestran las interacciones entre
actores (Cliente, Administrador) y el sistema. Los activos incluyen:

- UC1: Autenticación (registro/login).
- UC2: Gestión de catálogo.
- UC3: Manejo de carrito y pedidos.
- UC4: Operaciones administrativas.

(Ver archivo `docs/Documento_Tecnico.md` para imágenes y descripciones.)

---

## 8. Implementación – Despliegue y Código Fuente

El código fuente está organizado como se muestra en la sección 3. La
aplicación se inicia con:

```bash
npm install
npm start
```

en un entorno con variables definidas en `.env` (HOST, USER, PASSWORD,
DATABASE, JWT_SECRET).

El repositorio público se encuentra en:
https://github.com/Thejuan230/PacialPruebasSoftware1

---

## 9. Checklist de Pruebas

Durante las pruebas se verificaron los siguientes puntos:

- [x] Registro y login funcionan para ambos roles.
- [x] Búsqueda y listado de productos.
- [x] Carrito se mantiene entre rutas y permite modificar ítems.
- [x] Checkout procesa pedidos y guarda en BD.
- [x] Panel admin permite CRUD de productos.
- [x] Gestión de pedidos cambia estados y exporta CSV.
- [x] Guardado seguro de contraseñas (hash bcrypt).
- [x] Control de acceso según rol (middleware).

---

## 10. Plan de Capacitación

Se preparó una guía de uso (usuario/administrador) y se dedicaron sesiones
cortas a:

1. Explicar la estructura del proyecto.
2. Mostrar cómo ejecutar localmente.
3. Enseñar a administrar productos y pedidos.
4. Revisar el flujo de compra como cliente.


---

## 11. Conclusiones

El proyecto cumplió con los objetivos planteados: se entregó una plataforma
funcional de comercio electrónico con autenticación, catálogo,
carrito, pedidos y panel administrativo. La elección de Node.js/Express y
MySQL resultó adecuada y permitió un desarrollo rápido. Se identificaron
posibles mejoras futuras, como integración de pagos y notificaciones.

---

## 12. Referencias

- Documentación de Express: https://expressjs.com/
- MySQL Official Site: https://www.mysql.com/
- Bootstrap 5: https://getbootstrap.com/
- JWT: https://jwt.io/
- Bcrypt: https://www.npmjs.com/package/bcrypt
- IEEE 830: Especificación de Requisitos de Software

