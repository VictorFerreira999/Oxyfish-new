class IPhRepository {
   constructor() {
       if (new.target === IPhRepository) {
           throw new Error("IPhRepository cannot be instantiated directly.");
       }
   }

   async add(leitura_id, valor) {
       throw new Error("Method 'add' must be implemented.");
   }

   async getById(id) {
       throw new Error("Method 'getById' must be implemented.");
   }

   async getAll() {
       throw new Error("Method 'getAll' must be implemented.");
   }

   async update(id, newData) {
       throw new Error("Method 'update' must be implemented.");
   }

   async delete(id) {
       throw new Error("Method 'delete' must be implemented.");
   }
}

module.exports = IPhRepository;
