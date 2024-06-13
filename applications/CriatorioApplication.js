class CriatorioApplication {
   constructor(criatorioRepository) {
       this.criatorioRepository = criatorioRepository;
   }

   async getById(id) {
       try {
           const criatorio = await this.criatorioRepository.getById(id);
           return criatorio;
       } catch (error) {
           throw new Error("Erro ao obter criatório por ID: " + error.message);
       }
   }

   async getAll() {
       try {
           const criatorios = await this.criatorioRepository.getAll();
           return criatorios;
       } catch (error) {
           throw new Error("Erro ao obter todos os criatórios: " + error.message);
       }
   }

   async add(data) {
       try {
           const novoCriatorio = await this.criatorioRepository.add(data);
           return novoCriatorio;
       } catch (error) {
           throw new Error("Erro ao adicionar criatório: " + error.message);
       }
   }

   async update(id, newData) {
       try {
           await this.criatorioRepository.update(id, newData);
       } catch (error) {
           throw new Error("Erro ao atualizar criatório: " + error.message);
       }
   }

   async delete(id) {
       try {
           await this.criatorioRepository.delete(id);
       } catch (error) {
           throw new Error("Erro ao deletar criatório: " + error.message);
       }
   }
}

module.exports = CriatorioApplication;
