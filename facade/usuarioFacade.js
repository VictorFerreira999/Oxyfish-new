const UsuarioApplication = require('../applications/usuarioApplication');

class UsuarioFacade {
  constructor(usuarioApplication) {
    this.usuarioApplication = usuarioApplication;
  }

  async getAllUsuarios() {
    return await this.usuarioApplication.getAll();
  }

  async getUsuarioById(id) {
    return await this.usuarioApplication.getById(id);
  }

  async addUsuario(data) {
    return await this.usuarioApplication.add(data);
  }

  async updateUsuario(id, newData) {
    await this.usuarioApplication.update(id, newData);
  }

  async deleteUsuario(id) {
    await this.usuarioApplication.delete(id);
  }
}

module.exports = UsuarioFacade;
