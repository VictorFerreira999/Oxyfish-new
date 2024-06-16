const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const authRoutes = require('./routes/authRoutes');
const temperaturaRoutes = require('./routes/temperaturaRoutes');
const phRoutes = require('./routes/phRoutes');
const oxigenioRoutes = require('./routes/oxigenioRoutes');
const criatorioRoutes = require('./routes/criatorioRoutes');
const arduinoRoutes = require('./routes/arduinoRoutes');
const leituraRoutes = require('./routes/leituraRoutes');
const peixeRoutes = require('./routes/peixeRoutes');
const usuarioCriatorioRoutes = require('./routes/usuarioCriatorioRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

const isAuth = require("./middleware/isAuth");

// Middleware para JSON parsing
app.use(express.json());

// Middleware de autenticação (se necessário)
// app.use(isAuth);

// Rotas
app.use("/api/auth", authRoutes);
app.use("/api/temperatura", temperaturaRoutes);
app.use("/api/ph", phRoutes);
app.use("/api/oxigenio", oxigenioRoutes);
app.use("/api/criatorio", criatorioRoutes);
app.use("/api/arduino", arduinoRoutes);
app.use("/api/leitura", leituraRoutes);
app.use("/api/peixe", peixeRoutes);
app.use("/api/usuarioCriatorio", usuarioCriatorioRoutes);
app.use("/api/usuario", usuarioRoutes);

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
