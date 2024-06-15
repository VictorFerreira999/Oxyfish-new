const IUsuarioRepository = require("../interface/iUsuarioRepository");
const { Usuario } = require("../data/dbContext");

class UsuarioRepository extends IUsuarioRepository {
    constructor() {
        super();
    }

    async add(nome, email, senha) {
        try {
            const novoUsuario = await Usuario.create({ nome, email, senha });
            return novoUsuario;
        } catch (error) {
            throw new Error('Erro ao criar novo usuário: ' + error.message);
        }
    }

    async getById(id) {
        try {
            const usuario = await Usuario.findByPk(id);
            return usuario;
        } catch (error) {
            throw new Error('Erro ao buscar usuário por ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const usuarios = await Usuario.findAll();
            return usuarios;
        } catch (error) {
            throw new Error('Erro ao buscar todos os usuários: ' + error.message);
        }
    }

    async update(id, newData) {
        try {
            const usuario = await Usuario.findByPk(id);
            if (!usuario) {
                throw new Error('Usuário não encontrado');
            }
            await usuario.update(newData);
        } catch (error) {
            throw new Error('Erro ao atualizar usuário: ' + error.message);
        }
    }

    async delete(id) {
        try {
            const usuario = await Usuario.findByPk(id);
            if (!usuario) {
                throw new Error('Usuário não encontrado');
            }
            await usuario.destroy();
        } catch (error) {
            throw new Error('Erro ao deletar usuário: ' + error.message);
        }
    }
}

module.exports = UsuarioRepository;
