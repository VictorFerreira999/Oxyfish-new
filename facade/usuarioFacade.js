class UsuarioFacade {
  constructor(usuarioRepository) {
      this.usuarioRepository = usuarioRepository;
  }

  async getById(id) {
      return await this.usuarioRepository.getById(id);
  }

  async getAll() {
      return await this.usuarioRepository.getAll();
  }

  async add(nome, email, senha) {
      return await this.usuarioRepository.add(nome, email, senha);
  }

  async update(id, newData) {
      await this.usuarioRepository.update(id, newData);
  }

  async delete(id) {
      await this.usuarioRepository.delete(id);
  }
}

module.exports = UsuarioFacade;
