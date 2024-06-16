class IUsuarioRepository {
  constructor() {
    if (new.target === IUsuarioRepository) {
      throw new Error("A interface IUsuarioRepository não pode ser instanciada diretamente.");
    }
  }

  async add(data) {
    throw new Error("Este método deve ser implementado pelas classes concretas.");
  }

  async getById(id) {
    throw new Error("Este método deve ser implementado pelas classes concretas.");
  }

  async getAll() {
    throw new Error("Este método deve ser implementado pelas classes concretas.");
  }

  async update(id, newData) {
    throw new Error("Este método deve ser implementado pelas classes concretas.");
  }

  async delete(id) {
    throw new Error("Este método deve ser implementado pelas classes concretas.");
  }
}

module.exports = IUsuarioRepository;
