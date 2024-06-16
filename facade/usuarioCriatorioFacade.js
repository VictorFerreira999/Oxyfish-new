class UsuarioFacade {
    constructor(usuarioApplication) {
        this.usuarioApplication = usuarioApplication;
    }

    async add(usuario) {
        try {
            const novoUsuario = await this.usuarioApplication.add(usuario);
            return novoUsuario;
        } catch (error) {
            throw new Error("Erro ao adicionar usuário: " + error.message);
        }
    }

    async getById(id) {
        try {
            const usuario = await this.usuarioApplication.getById(id);
            return usuario;
        } catch (error) {
            throw new Error("Erro ao obter usuário por ID: " + error.message);
        }
    }

    async getAll() {
        try {
            const usuarios = await this.usuarioApplication.getAll();
            return usuarios;
        } catch (error) {
            throw new Error("Erro ao obter todos os usuários: " + error.message);
        }
    }

    async update(id, newData) {
        try {
            await this.usuarioApplication.update(id, newData);
        } catch (error) {
            throw new Error("Erro ao atualizar usuário: " + error.message);
        }
    }

    async delete(id) {
        try {
            await this.usuarioApplication.delete(id);
        } catch (error) {
            throw new Error("Erro ao deletar usuário: " + error.message);
        }
    }
}

module.exports = UsuarioFacade;
