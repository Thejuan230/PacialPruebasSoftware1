# Documentación - E-commerce

Este directorio contiene la documentación completa del proyecto de E-commerce.

## 📁 Archivos de Documentación

### 1. **SRS_IEEE830.md** — Especificación de Requisitos de Software
**Estándar:** IEEE 830-1998

Documento formal que define:
- Propósito y alcance del sistema
- Requisitos funcionales (RF)
- Requisitos no funcionales (RNF)
- Interfaces de usuario, hardware y software
- Definiciones y acrónimos
- Stack tecnológico completo

**Audiencia:** Desarrolladores, testers, evaluadores

**Secciones principales:**
1. Introducción (propósito, alcance, personal)
2. Descripción general (perspectiva, funcionalidades, usuarios)
3. Requisitos específicos (RF y RNF detallados)
4. Apéndices (stack tecnológico)

---

### 2. **HU.md** — Historias de Usuario
**Cantidad:** 20 historias de usuario

Detalla todos los requisitos desde perspectiva del usuario:

**Estructura:**
```
HU-XX: [Título]
Como: [tipo de usuario]
Quiero: [funcionalidad]
Para: [objetivo]
Criterios de aceptación: [lista de criterios]
```

**Sprints cubiertos:**
- Sprint 1: Autenticación (3 HUs)
- Sprint 2: Catálogo (3 HUs)
- Sprint 3: Carrito (2 HUs)
- Sprint 4: Pedidos (2 HUs)
- Sprint 5: Perfil (2 HUs)
- Sprint 6: Admin Productos (3 HUs)
- Sprint 7: Admin Pedidos/Usuarios (3 HUs)

**Uso:** Validar que cada funcionalidad cumple con lo esperado

---

### 3. **Documento_Tecnico.md** — Especificación Técnica
**Enfoque:** Arquitectura y implementación

Contiene:
- Arquitectura y patrón de diseño (MVC)
- Justificación de tecnologías
- Estructura del proyecto (carpetas y archivos)
- Modelo de datos MySQL
- APIs y endpoints detallados
- Flujos principales del sistema
- Medidas de seguridad
- Guía de instalación y despliegue

**Secciones:**
1. Arquitectura (diagramas de flujo)
2. Justificación tecnológica
3. Estructura carpetas
4. Base de datos (modelo SQL)
5. APIs (métodos, rutas, autenticación)
6. Flujos (registro, login, compra)
7. Seguridad (JWT, Bcrypt, validación)
8. Instalación (local y producción)
9. Stack completo

**Para:** Desarrolladores, arquitectos, deployment

---

### 4. **informe.md** — Informe Final del Proyecto
**Alcance:** Resumen ejecutivo completo

Documento integral que incluye:
- Análisis de la aplicación
- Metodología SCRUM utilizada
- Justificación de tecnologías
- Ciclo de vida del software (5 fases)
- Requisitos IEEE 830
- Historias de usuario
- Diagramas de casos de uso
- Código fuente y despliegue
- Checklist de pruebas
- Conclusiones y recomendaciones

**Incluye:**
- ✅ Objetivos y alcance
- ✅ Métricas del proyecto
- ✅ Sprints ejecutados
- ✅ Requisitos funcionales y no funcionales
- ✅ Pruebas realizadas
- ✅ Logros alcanzados
- ✅ Recomendaciones futuras
- ✅ Estado final del proyecto

**Público:** Directivos, stakeholders, evaluadores académicos

---

## 🎯 Guía de Lectura Recomendada

### Para **Desarrolladores:**
1. Leer `Documento_Tecnico.md` (arquitectura)
2. Consultar `SRS_IEEE830.md` (requisitos técnicos)
3. Revisar `HU.md` (criterios de aceptación)

### Para **Project Managers/Directivos:**
1. Leer `informe.md` (resumen ejecutivo)
2. Consultar `HU.md` (funcionalidades)
3. Revisar `SRS_IEEE830.md` (alcance)

### Para **Testers/QA:**
1. Usar `HU.md` (criterios de aceptación)
2. Consultar `informe.md` (checklist de pruebas)
3. Revisar `SRS_IEEE830.md` (RNF)

### Para **Evaluadores Académicos:**
1. Leer `informe.md` (análisis completo)
2. Revisar `SRS_IEEE830.md` (cumplimiento IEEE)
3. Consultar `Documento_Tecnico.md` (implementación)
4. Verificar `HU.md` (metodología SCRUM)

---

## 📊 Estadísticas del Proyecto

| Métrica | Valor |
|---------|-------|
| **Documentos** | 4 archivos markdown |
| **Requisitos Funcionales** | 20 RF |
| **Requisitos No Funcionales** | 10+ RNF |
| **Historias de Usuario** | 20 HUs |
| **Sprints** | 8 sprints |
| **Controllers** | 4 |
| **Models** | 4 |
| **Rutas API** | 15+ endpoints |
| **Páginas HTML** | 12+ |
| **Líneas de código** | 3,500+ |

---

## 🔗 Relación entre Documentos

```
SRS_IEEE830.md
    ├── Define todos los RF y RNF
    └── Especificación formal

HU.md
    ├── Detalla cada requisito como historia
    ├── Basado en SRS_IEEE830.md
    └── Criterios de validación

Documento_Tecnico.md
    ├── Explica cómo se implementan los RF
    ├── Arquitectura del sistema
    ├── APIs y endpoints
    └── Guía de deployment

informe.md
    ├── Resume todo el proyecto
    ├── Ciclo de vida completo
    ├── Pruebas realizadas
    ├── Conclusiones
    └── Recomendaciones
```

---

## 🚀 Tecnologías Documentadas

**Backend:**
- Node.js 18+
- Express 5.1
- MySQL 3.14
- Bcrypt 6.0
- JWT 9.0

**Frontend:**
- HTML5
- Bootstrap 5.3
- JavaScript ES6+
- CSS3

**Seguridad:**
- Bcrypt (hashing)
- JWT (autenticación)
- Validación en cliente y servidor

**Herramientas:**
- Git/GitHub (versionamiento)
- npm (gestión dependencias)
- dotenv (variables entorno)

---

## ✅ checklist para Usar la Documentación

- [ ] Leer al menos uno de los 4 documentos
- [ ] Entender la arquitectura leyendo Documento_Tecnico.md
- [ ] Validar requisitos en SRS_IEEE830.md
- [ ] Revisar criterios de aceptación en HU.md
- [ ] Leer informe para contexto general
- [ ] Consultar documentación según rol/necesidad

---

## 📝 Notas Importantes

1. **Estos documentos son vivos:** Actualizar conforme el proyecto evoluciona
2. **Versión actual:** 1.0 (Marzo 2026)
3. **Cambios futuros:** Crear v1.1 con nuevas funcionalidades
4. **Validación:** Todos los documentos cumplen con estándares IEEE 830

---

**Última actualización:** Marzo 2026

**Autor:** Juan Carlos

**Estado:** ✅ COMPLETO
