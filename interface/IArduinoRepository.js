class IArduinoRepository {
   constructor() {
     if (new.target === IArduinoRepository) {
       throw new Error("A interface IArduinoRepository não pode ser instanciada.");
     }
   }
 
   async add(criatorio_id, localizacao) {
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
 
 module.exports = IArduinoRepository;
 