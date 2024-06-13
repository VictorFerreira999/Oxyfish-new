const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // Obtém o cabeçalho de autorização da requisição
  const authHeader = req.get("Authorization");

  // Verifica se o cabeçalho de autorização está presente
  if (!authHeader) {
    return res.status(401).json({ error: "Não está autenticado" });
  }

  // Extrai o token do cabeçalho de autorização
  const token = authHeader.split(" ")[1];
  let tokenDecodificado;

  try {
    // Verifica e decodifica o token
    tokenDecodificado = jwt.verify(token, "minha_chave_secreta");
  } catch (err) {
    return res.status(500).json({ error: "Falha na autenticação" });
  }

  // Verifica se o token foi decodificado corretamente
  if (!tokenDecodificado) {
    return res.status(401).json({ error: "Não está autenticado" });
  }

  // Anexa o ID do usuário decodificado à requisição
  req.idUsuario = tokenDecodificado.ID;

  // Chama o próximo middleware ou rota
  next();
};
