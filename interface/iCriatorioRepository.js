class ICriatorioRepository {
  constructor() {
    if (new.target === ICriatorioRepository) {
      throw new Error("A interface ICriatorioRepository não pode ser instanciada diretamente.");
    }
  }

  async add(nome, tipo) {
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

module.exports = ICriatorioRepository;
