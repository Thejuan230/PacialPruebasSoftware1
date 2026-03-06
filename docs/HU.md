# HISTORIAS DE USUARIO

## Proyecto: E-commerce – Sistema Integral de Compras en Línea

**Fecha:** Marzo 2026

**Responsable:** Juan Carlos

---

## SPRINT 1 – AUTENTICACIÓN

---

### HU-01: Registro de Nuevo Usuario

| Campo | Detalle |
|-------|---------|
| **Título** | REGISTRO DE NUEVO USUARIO |
| **Nro Sprint** | 1 |
| **Responsable** | Desarrollador |

**Como:** visitante del sitio web

**Quiero:** registrarme con mi nombre, email y contraseña

**Para:** crear una cuenta y poder realizar compras en la tienda

**Criterios de Aceptación:**
- **Dado que** el visitante ingresa nombre, email y contraseña válidos, **cuando** presione el botón "Registrarse", **entonces** el sistema creará la cuenta y lo redirigirá al catálogo.
- **Dado que** el visitante ingresa un email que ya está registrado, **cuando** intente registrarse, **entonces** el sistema mostrará el mensaje "El correo ya está registrado".
- **Dado que** el visitante deja campos obligatorios vacíos, **cuando** intente registrarse, **entonces** el sistema mostrará mensajes de validación.

---

### HU-02: Inicio de Sesión

| Campo | Detalle |
|-------|---------|
| **Título** | INICIO DE SESIÓN DE USUARIO |
| **Nro Sprint** | 1 |
| **Responsable** | Desarrollador |

**Como:** usuario registrado

**Quiero:** iniciar sesión con mi email y contraseña

**Para:** acceder a mis funcionalidades según mi rol

**Criterios de Aceptación:**
- **Dado que** el usuario ingresa email y contraseña válidos, **cuando** presione el botón "Iniciar Sesión", **entonces** el sistema lo autenticará y redirigirá al catálogo (cliente) o dashboard (admin).
- **Dado que** el usuario ingresa credenciales incorrectas, **cuando** intente iniciar sesión, **entonces** el sistema mostrará el mensaje "Credenciales inválidas".
- **Dado que** el usuario se autentica correctamente, **cuando** se genere el JWT, **entonces** expirará en 7 días.

---

### HU-03: Cierre de Sesión

| Campo | Detalle |
|-------|---------|
| **Título** | CIERRE DE SESIÓN |
| **Nro Sprint** | 1 |
| **Responsable** | Desarrollador |

**Como:** usuario autenticado

**Quiero:** cerrar mi sesión de forma segura

**Para:** proteger mi cuenta cuando termine de usar la aplicación

**Criterios de Aceptación:**
- **Dado que** el usuario autenticado hace clic en el botón "Cerrar Sesión", **cuando** confirme la acción, **entonces** el sistema destruirá el token y redirigirá al catálogo.
- **Dado que** la sesión del usuario ha sido cerrada, **cuando** intente acceder a una ruta protegida, **entonces** el sistema lo redirigirá a login.

---

## SPRINT 2 – CATÁLOGO Y PRODUCTOS

---

### HU-04: Visualización del Catálogo

| Campo | Detalle |
|-------|---------|
| **Título** | VISUALIZACIÓN DEL CATÁLOGO DE PRODUCTOS |
| **Nro Sprint** | 2 |
| **Responsable** | Desarrollador |

**Como:** visitante o usuario registrado

**Quiero:** ver todos los productos disponibles en el catálogo

**Para:** explorar los productos y encontrar lo que deseo comprar

**Criterios de Aceptación:**
- **Dado que** acceso a la dirección principal, **cuando** cargue la página, **entonces** el sistema mostrará todos los productos activos con imagen, nombre y precio.
- **Dado que** no hay productos en el sistema, **cuando** acceda al catálogo, **entonces** el sistema mostrará un mensaje informativo.
- **Dado que** accedo desde un dispositivo móvil, **cuando** cargue el catálogo, **entonces** la interfaz se adaptará correctamente.

---

### HU-05: Búsqueda de Productos

| Campo | Detalle |
|-------|---------|
| **Título** | BÚSQUEDA DE PRODUCTOS |
| **Nro Sprint** | 2 |
| **Responsable** | Desarrollador |

**Como:** visitante o usuario registrado

**Quiero:** buscar productos por nombre o descripción

**Para:** encontrar rápidamente el producto que estoy buscando

**Criterios de Aceptación:**
- **Dado que** escribo texto en la barra de búsqueda y presiono Enter, **cuando** se procese la búsqueda, **entonces** el sistema mostrará solo los productos que coincidan (insensible a mayúsculas).
- **Dado que** busco un texto que no existe, **cuando** se procese, **entonces** mostrará "No se encontraron productos".
- **Dado que** borro el texto de búsqueda, **cuando** presiono Enter, **entonces** se mostrarán todos los productos nuevamente.

---

### HU-06: Ver Detalle de Producto

| Campo | Detalle |
|-------|---------|
| **Título** | VER DETALLE DE PRODUCTO |
| **Nro Sprint** | 2 |
| **Responsable** | Desarrollador |

**Como:** visitante o usuario registrado

**Quiero:** ver la información completa de un producto específico

**Para:** conocer su descripción, precio y decidir si lo quiero comprar

**Criterios de Aceptación:**
- **Dado que** hago clic en un producto del catálogo, **cuando** cargue la página de detalle, **entonces** mostrará imagen, nombre, descripción, precio y botón "Agregar al Carrito".
- **Dado que** intento acceder a un producto inexistente, **cuando** cargue la URL, **entonces** el sistema redirigirá al catálogo.

---

## SPRINT 3 – CARRITO DE COMPRAS

---

### HU-07: Agregar Producto al Carrito

| Campo | Detalle |
|-------|---------|
| **Título** | AGREGAR PRODUCTO AL CARRITO |
| **Nro Sprint** | 3 |
| **Responsable** | Desarrollador |

**Como:** visitante o usuario registrado

**Quiero:** agregar un producto al carrito seleccionando cantidad

**Para:** acumular productos que deseo comprar

**Criterios de Aceptación:**
- **Dado que** selecciono una cantidad válida, **cuando** presione "Agregar al Carrito", **entonces** el sistema agregará el producto, mostrará un mensaje de confirmación y actualizará el contador.
- **Dado que** agrego el mismo producto nuevamente, **cuando** se procese, **entonces** sumará la cantidad al ítem existente.
- **Dado que** la cantidad es menor a 1 o mayor al stock, **cuando** intente agregar, **entonces** mostrará un mensaje de error.

---

### HU-08: Ver y Gestionar el Carrito

| Campo | Detalle |
|-------|---------|
| **Título** | VER Y GESTIONAR EL CARRITO |
| **Nro Sprint** | 3 |
| **Responsable** | Desarrollador |

**Como:** visitante o usuario registrado

**Quiero:** ver todos los productos en mi carrito y gestionar su contenido

**Para:** revisar mi selección antes de pagar

**Criterios de Aceptación:**
- **Dado que** accedo a la página del carrito, **cuando** cargue, **entonces** mostrará lista de productos con cantidad, precio unitario, subtotal y total general.
- **Dado que** hago clic en eliminar un ítem, **cuando** se procese, **entonces** lo eliminará y recalculará el total.
- **Dado que** el carrito está vacío, **cuando** acceda, **entonces** mostrará "Tu carrito está vacío" con enlace al catálogo.
- **Dado que** modifico la cantidad de un producto, **cuando** guarde, **entonces** actualizará el subtotal y total.

---

## SPRINT 4 – PEDIDOS Y CHECKOUT

---

### HU-09: Crear Pedido (Checkout)

| Campo | Detalle |
|-------|---------|
| **Título** | CREAR PEDIDO (CHECKOUT) |
| **Nro Sprint** | 4 |
| **Responsable** | Desarrollador |

**Como:** usuario autenticado con productos en el carrito

**Quiero:** confirmar mi pedido

**Para:** formalizar mi compra

**Criterios de Aceptación:**
- **Dado que** soy usuario autenticado con carrito no vacío, **cuando** acceda al checkout, **entonces** mostraré los datos del pedido y botón para confirmar.
- **Dado que** presiono "Confirmar Pedido", **cuando** se procese, **entonces** creará el pedido, vaciará el carrito y mostrará número de confirmación.
- **Dado que** el stock se agotó, **cuando** intente confirmar, **entonces** mostrará mensaje de error y no creará el pedido.

---

### HU-10: Historial de Pedidos del Cliente

| Campo | Detalle |
|-------|---------|
| **Título** | HISTORIAL DE PEDIDOS DEL CLIENTE |
| **Nro Sprint** | 4 |
| **Responsable** | Desarrollador |

**Como:** cliente registrado

**Quiero:** ver el listado de todos mis pedidos

**Para:** hacer seguimiento a mis compras

**Criterios de Aceptación:**
- **Dado que** accedo a "Mis Pedidos", **cuando** cargue la página, **entonces** mostrará todos mis pedidos ordenados del más reciente al más antiguo.
- **Dado que** hago clic en un pedido, **cuando** cargue el detalle, **entonces** mostrará los productos comprados, total y estado.
- **Dado que** intento acceder a un pedido de otro usuario, **cuando** ingrese la URL, **entonces** mostrará mensaje de error y será redirigido.

---

## SPRINT 5 – PERFIL DE USUARIO

---

### HU-11: Edición de Perfil de Usuario

| Campo | Detalle |
|-------|---------|
| **Título** | EDICIÓN DE PERFIL DE USUARIO |
| **Nro Sprint** | 5 |
| **Responsable** | Desarrollador |

**Como:** usuario registrado

**Quiero:** editar mis datos personales

**Para:** mantener mi información actualizada

**Criterios de Aceptación:**
- **Dado que** accedo a mi perfil y modifico nombre o email, **cuando** presione "Guardar Cambios", **entonces** actualizará los datos y mostrará mensaje de confirmación.
- **Dado que** intento usar un email que ya existe, **cuando** guarde, **entonces** mostrará error "Email ya registrado".

---

### HU-12: Cambio de Contraseña

| Campo | Detalle |
|-------|---------|
| **Título** | CAMBIO DE CONTRASEÑA |
| **Nro Sprint** | 5 |
| **Responsable** | Desarrollador |

**Como:** usuario registrado

**Quiero:** cambiar mi contraseña

**Para:** mantener mi cuenta segura

**Criterios de Aceptación:**
- **Dado que** ingreso mi contraseña actual correcta y una nueva, **cuando** guarde, **entonces** cambiará la contraseña y mostrará confirmación.
- **Dado que** ingreso contraseña actual incorrecta, **cuando** intente guardar, **entonces** mostrará error "Contraseña actual incorrecta".

---

## SPRINT 6 – ADMINISTRACIÓN DE PRODUCTOS

---

### HU-13: Dashboard Administrativo

| Campo | Detalle |
|-------|---------|
| **Título** | DASHBOARD ADMINISTRATIVO |
| **Nro Sprint** | 6 |
| **Responsable** | Desarrollador |

**Como:** administrador del sistema

**Quiero:** ver un panel de control con estadísticas del negocio

**Para:** tomar decisiones informadas

**Criterios de Aceptación:**
- **Dado que** inicio sesión como admin, **cuando** sea redirigido al dashboard, **entonces** mostrará: total de pedidos, ventas totales, últimos pedidos y productos con bajo stock.
- **Dado que** un usuario normal intenta acceder al dashboard, **cuando** ingrese la URL, **entonces** será redirigido al catálogo.

---

### HU-14: Crear Producto

| Campo | Detalle |
|-------|---------|
| **Título** | CREAR PRODUCTO |
| **Nro Sprint** | 6 |
| **Responsable** | Desarrollador |

**Como:** administrador

**Quiero:** crear nuevos productos con información y foto

**Para:** agregarlos al catálogo

**Criterios de Aceptación:**
- **Dado que** ingreso nombre, descripción, precio, categoría e imagen, **cuando** presione "Crear Producto", **entonces** se creará y aparecerá en el catálogo.
- **Dado que** dejo campos obligatorios vacíos, **cuando** intente crear, **entonces** mostrará validaciones correspondientes.

---

### HU-15: Editar Producto

| Campo | Detalle |
|-------|---------|
| **Título** | EDITAR PRODUCTO |
| **Nro Sprint** | 6 |
| **Responsable** | Desarrollador |

**Como:** administrador

**Quiero:** editar información de productos existentes

**Para:** mantener el catálogo actualizado

**Criterios de Aceptación:**
- **Dado que** accedo a editar un producto, **cuando** cargue el formulario, **entonces** mostrará los datos actuales.
- **Dado que** modifico datos y presiono "Guardar", **entonces** actualizará el producto y mostrará confirmación.

---

### HU-16: Eliminar Producto

| Campo | Detalle |
|-------|---------|
| **Título** | ELIMINAR PRODUCTO |
| **Nro Sprint** | 6 |
| **Responsable** | Desarrollador |

**Como:** administrador

**Quiero:** eliminar productos del catálogo

**Para:** mantener inventory actualizado

**Criterios de Aceptación:**
- **Dado que** hago clic en eliminar un producto, **cuando** confirme, **entonces** será eliminado del catálogo.

---

## SPRINT 7 – ADMINISTRACIÓN DE PEDIDOS Y USUARIOS

---

### HU-17: Gestión de Pedidos (Admin)

| Campo | Detalle |
|-------|---------|
| **Título** | GESTIÓN DE PEDIDOS |
| **Nro Sprint** | 7 |
| **Responsable** | Desarrollador |

**Como:** administrador

**Quiero:** gestionar todos los pedidos del sistema

**Para:** cambiar estado y dar seguimiento

**Criterios de Aceptación:**
- **Dado que** accedo a la sección de pedidos, **cuando** cargue, **entonces** mostrará lista de todos con estado, total y cliente.
- **Dado que** hago clic en cambiar estado, **cuando** seleccione uno nuevo, **entonces** actualizará y mostrará el cambio.

---

### HU-18: Gestión de Usuarios (Admin)

| Campo | Detalle |
|-------|---------|
| **Título** | GESTIÓN DE USUARIOS |
| **Nro Sprint** | 7 |
| **Responsable** | Desarrollador |

**Como:** administrador

**Quiero:** gestionar usuarios del sistema

**Para:** controlar acceso y roles

**Criterios de Aceptación:**
- **Dado que** accedo a gestión de usuarios, **cuando** cargue, **entonces** mostrará lista de todos con rol y opciones de editar/eliminar.
- **Dado que** cambio el rol de un usuario a admin, **cuando** guarde, **entonces** tendrá acceso al panel administrativo.

---

### HU-19: Exportar Reportes

| Campo | Detalle |
|-------|---------|
| **Título** | EXPORTAR REPORTES |
| **Nro Sprint** | 7 |
| **Responsable** | Desarrollador |

**Como:** administrador

**Quiero:** exportar pedidos a CSV

**Para:** analizar datos en Excel

**Criterios de Aceptación:**
- **Dado que** hago clic en "Exportar a CSV", **cuando** se procese, **entonces** descargará un archivo con todos los pedidos.

---

### HU-20: Monitoreo de Stock

| Campo | Detalle |
|-------|---------|
| **Título** | MONITOREO DE STOCK |
| **Nro Sprint** | 7 |
| **Responsable** | Desarrollador |

**Como:** administrador

**Quiero:** ver alertas de productos con stock bajo

**Para:** realizar reposición a tiempo

**Criterios de Aceptación:**
- **Dado que** un producto tiene menos de 5 unidades, **cuando** acceda al dashboard, **entonces** aparecerá en sección de alertas.
- **Dado que** hago clic en el producto, **cuando** cargue el detalle, **entonces** podré editar stock directamente.

---

**Fin del Documento de Historias de Usuario**
