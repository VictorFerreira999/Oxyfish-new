const { usuarioFacade } = require("../dependency/injection");
const bcrypt = require("bcryptjs");
const { Usuario } = require("../data/dbContext");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  const { nome, email, senha } = req.body;

  bcrypt
    .hash(senha, 12)
    .then((hashedPassword) => {
      return usuarioFacade.add({ nome, email, senha: hashedPassword });
    })
    .then(() => {
      res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

exports.login = (req, res, next) => {
  const { email, senha } = req.body;

  let usuarioCarregado;

  Usuario.findOne({ where: { email } })
    .then((usuario) => {
      if (!usuario) {
        return res.status(401).json({ error: "O email informado não foi cadastrado" });
      }

      usuarioCarregado = usuario;
      return bcrypt.compare(senha, usuario.senha);
    })
    .then((isMatch) => {
      if (!isMatch) {
        return res.status(401).json({ error: "Usuário ou senha errados!" });
      }

      const token = jwt.sign(
        {
         idUsuario: usuarioCarregado.idUsuario,
         email: usuarioCarregado.email,
        },
        "minha_chave_secreta",
        { expiresIn: "1h" }
      );

      res.status(200).json({ token });
    })
    .catch((err) => {
      next(err);
    });
};