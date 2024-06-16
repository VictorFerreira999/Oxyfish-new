class UsuarioApplication {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    async add(data) {
        try {
            const novoUsuario = await this.usuarioRepository.add(data);
            return novoUsuario;
        } catch (error) {
            throw new Error('Erro ao adicionar usuário: ' + error.message);
        }
    }

    async getById(id) {
        try {
            const usuario = await this.usuarioRepository.getById(id);
            return usuario;
        } catch (error) {
            throw new Error('Erro ao buscar usuário por ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const usuarios = await this.usuarioRepository.getAll();
            return usuarios;
        } catch (error) {
            throw new Error('Erro ao buscar todos os usuários: ' + error.message);
        }
    }

    async update(id, newData) {
        try {
            await this.usuarioRepository.update(id, newData);
        } catch (error) {
            throw new Error('Erro ao atualizar usuário: ' + error.message);
        }
    }

    async delete(id) {
        try {
            await this.usuarioRepository.delete(id);
        } catch (error) {
            throw new Error('Erro ao deletar usuário: ' + error.message);
        }
    }
}

module.exports = UsuarioApplication;
