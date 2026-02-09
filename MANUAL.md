# 📊 Premium Gauge para Tableau - Manual de Uso

## Índice
1. [Instalación](#instalación)
2. [Deploy en Render](#deploy-en-render)
3. [Configuración en Tableau](#configuración-en-tableau)
4. [Panel de Configuración](#panel-de-configuración)
5. [Personalización de Colores](#personalización-de-colores)
6. [Conexión con Datos](#conexión-con-datos)
7. [Solución de Problemas](#solución-de-problemas)

---

## Instalación

### Requisitos
- Tableau Desktop 2018.2 o superior
- Acceso a internet (para cargar la extensión)

### Archivos incluidos
```
tableau-gauge-render/
├── server.js           # Servidor Express
├── package.json        # Dependencias
├── gauge.trex          # Manifest para Tableau
└── public/
    ├── index.html      # Gauge principal
    └── configure.html  # Panel de configuración
```

---

## Deploy en Render

### Paso 1: Subir a GitHub
```bash
# En la carpeta del proyecto
git init
git add .
git commit -m "Premium Gauge v2"
git remote add origin https://github.com/TU-USUARIO/premium-gauge.git
git push -u origin main
```

### Paso 2: Crear servicio en Render
1. Ir a [render.com](https://render.com)
2. Click en **New → Web Service**
3. Conectar tu repositorio de GitHub
4. Configurar:
   - **Name**: `premium-gauge`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

### Paso 3: Obtener URL
Después del deploy, Render te da una URL como:
```
https://premium-gauge-xxxx.onrender.com
```

### Paso 4: Actualizar gauge.trex
Abrir `gauge.trex` y reemplazar:
```xml
<url>TU_URL_DE_RENDER_AQUI</url>
```
por:
```xml
<url>https://premium-gauge-xxxx.onrender.com</url>
```

---

## Configuración en Tableau

### Agregar la extensión al dashboard

1. Abrir tu dashboard en Tableau Desktop
2. En el panel izquierdo, sección **Objects**, arrastrar **Extension** al dashboard
3. Click en **"Access Local Extensions"** (o similar)
4. Seleccionar el archivo `gauge.trex`
5. Click en **OK** cuando pida permisos

### Primera configuración
Al agregar la extensión, verás un botón **"Configurar"**. Click ahí para abrir el panel de configuración.

### Cambiar configuración después
- **Click derecho** sobre la extensión → **Configure**

---

## Panel de Configuración

### 1. Fuente de Datos

| Campo | Descripción |
|-------|-------------|
| **Hoja del Dashboard** | Seleccioná la hoja de Tableau que contiene el valor a mostrar |
| **Campo / Medida** | Elegí el campo numérico (SUM, AVG, etc.) que querés visualizar |

**Tip**: Creá una hoja específica con un solo valor (ej: SUM de ventas) para mejores resultados.

### 2. Tema Base

| Tema | Uso recomendado |
|------|-----------------|
| **Oscuro** | Dashboards con fondo oscuro o negro |
| **Claro** | Dashboards con fondo blanco o gris claro |
| **Transparente** | Se adapta al fondo del dashboard |

### 3. Paleta de Colores

#### Presets disponibles

| Preset | Colores | Estilo |
|--------|---------|--------|
| **Default** | Rosa → Amarillo → Cyan | Moderno y vibrante |
| **Midnight** | Magenta → Violeta → Azul | Nocturno elegante |
| **Forest** | Rojo → Naranja → Verde | Natural |
| **Ocean** | Rojo → Naranja → Turquesa | Marino |
| **Sunset** | Rojo oscuro → Naranja → Amarillo | Cálido |
| **Corporate** | Rojo → Amarillo → Verde | Empresarial clásico |
| **Minimal** | Colores suaves, fondo blanco | Limpio y simple |
| **Custom** | Elegís tus propios colores | Total libertad |

### 4. Texto

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| **Título** | Nombre del KPI | "Cumplimiento Q1" |
| **Unidad** | Texto debajo del número | "percent", "USD", "unidades" |

### 5. Rangos y Zonas

| Campo | Descripción |
|-------|-------------|
| **Mínimo** | Valor inicial del gauge (generalmente 0) |
| **Máximo** | Valor final del gauge (ej: 100 para porcentajes) |
| **Zona 1** | Rango "crítico" (rojo) |
| **Zona 2** | Rango "moderado" (amarillo) |
| **Zona 3** | Rango "excelente" (verde) |

Cada zona tiene una **etiqueta** que aparece debajo del gauge.

---

## Personalización de Colores

### Usar colores custom

1. En el panel de configuración, seleccionar **Custom** en la paleta
2. Elegir colores con el color picker o escribir el código HEX
3. Guardar

### Códigos de colores comunes

| Color | HEX |
|-------|-----|
| Rojo Tableau | `#E15759` |
| Naranja Tableau | `#F28E2B` |
| Verde Tableau | `#59A14F` |
| Azul Tableau | `#4E79A7` |
| Rojo Bootstrap | `#DC3545` |
| Amarillo Bootstrap | `#FFC107` |
| Verde Bootstrap | `#28A745` |

---

## Conexión con Datos

### Cómo funciona

```
Hoja de Tableau (con filtros)
         ↓
    Extension lee el primer valor numérico
         ↓
    Gauge se actualiza
```

### Mejores prácticas

1. **Crear una hoja dedicada** con un solo número (KPI)
2. **Usar agregaciones claras** (SUM, AVG, MAX, etc.)
3. **Aplicar filtros** en la hoja - el gauge los respeta

### Interacción con filtros

El gauge se actualiza automáticamente cuando:
- ✅ Cambian los filtros del dashboard
- ✅ Se seleccionan marcas en otras hojas
- ✅ Se modifican parámetros

---

## Solución de Problemas

### El gauge no carga
- Verificar que la URL de Render esté activa
- Render en plan free puede "dormirse" después de inactividad
- Solución: Visitar la URL directamente para "despertar" el servicio

### No veo mis hojas en el selector
- La extensión solo muestra hojas que están en el dashboard actual
- Agregar la hoja al dashboard (puede estar oculta)

### No veo mis campos
- Solo aparecen campos numéricos (INT, FLOAT)
- Verificar que la hoja tenga datos (no esté vacía por filtros)

### Los colores no cambian
- Después de guardar, el gauge se actualiza solo
- Si no funciona, quitar y volver a agregar la extensión

### Error de permisos en Tableau Server
- La extensión necesita estar en la lista de permitidas
- Contactar al admin de Tableau Server para agregarla

---

## Actualizaciones

Para actualizar la extensión:

1. Hacer cambios en los archivos
2. Subir a GitHub: `git push`
3. Render detecta automáticamente y redeploya
4. En Tableau: click derecho → "Reload" o refrescar el dashboard

---

## Contacto

Desarrollado por el equipo de Data de Aero SRL.

Para reportar bugs o sugerir mejoras, crear un issue en el repositorio de GitHub.
