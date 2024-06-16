class IPeixeRepository {
  constructor() {
    if (new.target === IPeixeRepository) {
      throw new Error("A interface IPeixeRepository não pode ser instanciada diretamente.");
    }
  }

  async add(data) {
    throw new Error("Método add não implementado.");
  }

  async getById(id) {
    throw new Error("Método getById não implementado.");
  }

  async getAll() {
    throw new Error("Método getAll não implementado.");
  }

  async update(id, newData) {
    throw new Error("Método update não implementado.");
  }

  async delete(id) {
    throw new Error("Método delete não implementado.");
  }
}

module.exports = IPeixeRepository;
