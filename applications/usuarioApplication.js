const IUsuarioRepository = require("../interface/iUsuarioRepository");

class UsuarioApplication {
   constructor(usuarioRepository) {
       this.usuarioRepository = usuarioRepository;
   }

   async getById(id) {
       try {
           const usuario = await this.usuarioRepository.getById(id);
           return usuario;
       } catch (error) {
           throw new Error("Erro ao obter usuário por ID: " + error.message);
       }
   }

   async getAll() {
       try {
           const usuarios = await this.usuarioRepository.getAll();
           return usuarios;
       } catch (error) {
           throw new Error("Erro ao obter todos os usuários: " + error.message);
       }
   }

   async add(nome, email, senha) {
       try {
           const novoUsuario = await this.usuarioRepository.add(nome, email, senha);
           return novoUsuario;
       } catch (error) {
           throw new Error("Erro ao adicionar usuário: " + error.message);
       }
   }

   async update(id, newData) {
       try {
           await this.usuarioRepository.update(id, newData);
       } catch (error) {
           throw new Error("Erro ao atualizar usuário: " + error.message);
       }
   }

   async delete(id) {
       try {
           await this.usuarioRepository.delete(id);
       } catch (error) {
           throw new Error("Erro ao deletar usuário: " + error.message);
       }
   }
}

module.exports = UsuarioApplication;
