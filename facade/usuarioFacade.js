class UsuarioFacade {
  constructor(usuarioApplication) {
    this.usuarioApplication = usuarioApplication;
  }

  async get() {
    return await this.usuarioApplication.getAll();
  }

  async getById(id) {
    return await this.usuarioApplication.getById(id);
  }

  async add(data) {
    return await this.usuarioApplication.add(data);
  }

  async update(id, newData) {
    await this.usuarioApplication.update(id, newData);
  }

  async delete(id) {
    await this.usuarioApplication.delete(id);
  }
}

module.exports = UsuarioFacade;
