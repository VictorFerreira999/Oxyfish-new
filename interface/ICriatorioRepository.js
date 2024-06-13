class ICriatorioRepository {
   constructor() {
     if (new.target === ICriatorioRepository) {
       throw new Error("A interface ICriatorioRepository não pode ser instanciada.");
     }
   }
 
   async add(usuario_id, nome, localizacao) {
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
 
 module.exports = ICriatorioRepository;
 