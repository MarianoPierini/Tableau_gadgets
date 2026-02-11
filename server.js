const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_TOKEN = process.env.SECRET_TOKEN || 'aero2025gauge';

// Middleware de validación
function checkToken(req, res, next) {
  if (req.query.token === SECRET_TOKEN) {
    next();
  } else {
    res.status(403).send('Acceso denegado');
  }
}

app.get('/', checkToken, (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/configure', (req, res) => {
  res.sendFile(path.join(__dirname, 'configure.html'));
});

app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Premium Gauge running on port ${PORT}`);
});
