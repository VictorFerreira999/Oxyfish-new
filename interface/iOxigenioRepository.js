class IOxigenioRepository {
   constructor() {
       if (new.target === IOxigenioRepository) {
           throw new Error("IOxigenioRepository cannot be instantiated directly.");
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

module.exports = IOxigenioRepository;
