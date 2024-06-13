class LeituraApplication {
   constructor(leituraRepository) {
       this.leituraRepository = leituraRepository;
   }

   async getById(id) {
       try {
           const leitura = await this.leituraRepository.getById(id);
           return leitura;
       } catch (error) {
           throw new Error("Erro ao obter leitura por ID: " + error.message);
       }
   }

   async getAll() {
       try {
           const leituras = await this.leituraRepository.getAll();
           return leituras;
       } catch (error) {
           throw new Error("Erro ao obter todas as leituras: " + error.message);
       }
   }

   async add(data) {
       try {
           const novaLeitura = await this.leituraRepository.add(data);
           return novaLeitura;
       } catch (error) {
           throw new Error("Erro ao adicionar leitura: " + error.message);
       }
   }

   async update(id, newData) {
       try {
           await this.leituraRepository.update(id, newData);
       } catch (error) {
           throw new Error("Erro ao atualizar leitura: " + error.message);
       }
   }

   async delete(id) {
       try {
           await this.leituraRepository.delete(id);
       } catch (error) {
           throw new Error("Erro ao deletar leitura: " + error.message);
       }
   }
}

module.exports = LeituraApplication;
