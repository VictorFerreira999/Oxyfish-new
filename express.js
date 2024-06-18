const express = require('express');
const app = express();

const authRoutes = require('./routes/authRoutes');
const criatorioRoutes = require('./routes/criatorioRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const peixeRoutes = require('./routes/peixeRoutes');
const leituraRoutes = require('./routes/leituraRoutes');
const arduinoRoutes = require('./routes/arduinoRoutes');
const usuarioCriatorioRoutes = require('./routes/usuarioCriatorioRoutes');
const temperaturaRoutes = require('./routes/temperaturaRoutes');
const phRoutes = require('./routes/phRoutes');
const oxigenioRoutes = require('./routes/oxigenioRoutes');

// Middleware para parsing de JSON
app.use(express.json());

// Definição das rotas
app.use('/api/auth', authRoutes);
app.use('/api/criatorio', criatorioRoutes);
app.use('/api/usuario',isAuth, usuarioRoutes);
app.use('/api/peixe', peixeRoutes);
app.use('/api/leitura', leituraRoutes);
app.use('/api/arduino', arduinoRoutes);
app.use('/api/usuario-criatorio', usuarioCriatorioRoutes);
app.use('/api/temperatura', temperaturaRoutes);
app.use('/api/ph', phRoutes);
app.use('/api/oxigenio', oxigenioRoutes);

// Rota raiz
app.get('/', (req, res) => {
    res.send('Bem-vindo à API Oxyfish!');
});

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
