# ⚡ Premium Gauge - Tableau Extension

Extensión de Tableau para visualizar KPIs con un gauge premium totalmente personalizable.

![Gauge Preview](https://via.placeholder.com/600x300/0a0a0f/f4d03f?text=Premium+Gauge)

## ✨ Features

- 🎨 **7 paletas de colores** predefinidas + colores custom
- 🌓 **3 temas**: oscuro, claro, transparente
- 📊 **Conecta con tus datos** de Tableau
- 🔄 **Responde a filtros** automáticamente
- ⚙️ **Panel de configuración** visual

## 🚀 Deploy

### Render (recomendado)

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

1. Fork este repo
2. Crear Web Service en Render
3. Build: `npm install`
4. Start: `npm start`

### Local
```bash
npm install
npm start
# Abrir http://localhost:3000
```

## 📖 Uso

1. Deployar en Render
2. Copiar URL al archivo `gauge.trex`
3. En Tableau: Dashboard → Extension → Cargar `.trex`
4. Configurar fuente de datos y estilo

Ver [MANUAL.md](MANUAL.md) para instrucciones detalladas.

## 📁 Estructura

```
├── server.js           # Servidor Express
├── package.json        
├── gauge.trex          # Manifest Tableau
├── MANUAL.md           # Documentación completa
└── public/
    ├── index.html      # Gauge
    └── configure.html  # Panel de configuración
```

## 🎨 Paletas

| Default | Midnight | Corporate |
|---------|----------|-----------|
| ![](https://via.placeholder.com/20/f72585/f72585) ![](https://via.placeholder.com/20/f4d03f/f4d03f) ![](https://via.placeholder.com/20/00f5d4/00f5d4) | ![](https://via.placeholder.com/20/ff006e/ff006e) ![](https://via.placeholder.com/20/8338ec/8338ec) ![](https://via.placeholder.com/20/3a86ff/3a86ff) | ![](https://via.placeholder.com/20/dc3545/dc3545) ![](https://via.placeholder.com/20/ffc107/ffc107) ![](https://via.placeholder.com/20/28a745/28a745) |

## 📝 License

MIT - Libre para uso comercial e interno.
