class IArduinoRepository {
  constructor() {
    if (new.target === IArduinoRepository) {
      throw new Error("A interface IArduinoRepository não pode ser instanciada diretamente.");
    }
  }

  async add(criatorio_id, localizacao) {
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

module.exports = IArduinoRepository;
