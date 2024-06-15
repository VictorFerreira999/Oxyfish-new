class ILeituraRepository {
  constructor() {
    if (new.target === ILeituraRepository) {
      throw new Error("A interface ILeituraRepository não pode ser instanciada diretamente.");
    }
  }

  async add(arduino_id, data_hora) {
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

module.exports = ILeituraRepository;
