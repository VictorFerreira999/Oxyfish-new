class IUsuarioCriatorioRepository {
   constructor() {
     if (new.target === IUsuarioCriatorioRepository) {
       throw new Error("A interface IUsuarioCriatorioRepository não pode ser instanciada diretamente.");
     }
   }
 
   async add(usuario_id, criatorio_id) {
     throw new Error("Método add não implementado.");
   }
 
   async getById(usuario_id, criatorio_id) {
     throw new Error("Método getById não implementado.");
   }
 
   async getAll() {
     throw new Error("Método getAll não implementado.");
   }
 
   async update(usuario_id, criatorio_id, newData) {
     throw new Error("Método update não implementado.");
   }
 
   async delete(usuario_id, criatorio_id) {
     throw new Error("Método delete não implementado.");
   }
 }
 
 module.exports = IUsuarioCriatorioRepository;
 