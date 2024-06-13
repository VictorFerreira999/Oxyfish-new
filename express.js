const express = require('express');

const authRoutes = require('./routes/authRoutes');
const criatorioRoutes = require('./routes/criatorioRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const peixeRoutes = require('./routes/peixeRoutes');
const leituraRoutes = require('./routes/leituraRoutes');
const arduinoRoutes = require('./routes/arduinoRoutes');

const isAuth = require("./middleware/isAuth");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Rotas
app.use("/api/auth", authRoutes);
app.use("/api/criatorio", criatorioRoutes);
app.use("/api/usuario", isAuth, usuarioRoutes);
app.use("/api/peixe", peixeRoutes);
app.use("/api/leitura", leituraRoutes);
app.use("/api/arduino", arduinoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
