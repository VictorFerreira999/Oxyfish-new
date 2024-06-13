class PeixeApplication {
   constructor(peixeRepository) {
       this.peixeRepository = peixeRepository;
   }

   async getById(id) {
       try {
           const peixe = await this.peixeRepository.getById(id);
           return peixe;
       } catch (error) {
           throw new Error("Erro ao obter peixe por ID: " + error.message);
       }
   }

   async getAll() {
       try {
           const peixes = await this.peixeRepository.getAll();
           return peixes;
       } catch (error) {
           throw new Error("Erro ao obter todos os peixes: " + error.message);
       }
   }

   async add(data) {
       try {
           const novoPeixe = await this.peixeRepository.add(data);
           return novoPeixe;
       } catch (error) {
           throw new Error("Erro ao adicionar peixe: " + error.message);
       }
   }

   async update(id, newData) {
       try {
           await this.peixeRepository.update(id, newData);
       } catch (error) {
           throw new Error("Erro ao atualizar peixe: " + error.message);
       }
   }

   async delete(id) {
       try {
           await this.peixeRepository.delete(id);
       } catch (error) {
           throw new Error("Erro ao deletar peixe: " + error.message);
       }
   }
}

module.exports = PeixeApplication;
