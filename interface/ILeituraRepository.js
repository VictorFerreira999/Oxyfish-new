class ILeituraRepository {
   constructor() {
     if (new.target === ILeituraRepository) {
       throw new Error("A interface ILeituraRepository não pode ser instanciada.");
     }
   }
 
   async add(arduino_id, data_hora, temperatura, ph, oxigenio) {
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
 
 module.exports = ILeituraRepository;
 