class OxigenioFacade {
   constructor(oxigenioApplication) {
       this.oxigenioApplication = oxigenioApplication;
   }

   async add(oxigenio) {
       try {
           const novoOxigenio = await this.oxigenioApplication.add(oxigenio);
           return novoOxigenio;
       } catch (error) {
           throw new Error("Erro ao adicionar oxigênio: " + error.message);
       }
   }

   async getById(id) {
       try {
           const oxigenio = await this.oxigenioApplication.getById(id);
           return oxigenio;
       } catch (error) {
           throw new Error("Erro ao obter oxigênio por ID: " + error.message);
       }
   }

   async getAll() {
       try {
           const oxigenios = await this.oxigenioApplication.getAll();
           return oxigenios;
       } catch (error) {
           throw new Error("Erro ao obter todos os oxigênios: " + error.message);
       }
   }

   async update(id, newData) {
       try {
           await this.oxigenioApplication.update(id, newData);
       } catch (error) {
           throw new Error("Erro ao atualizar oxigênio: " + error.message);
       }
   }

   async delete(id) {
       try {
           await this.oxigenioApplication.delete(id);
       } catch (error) {
           throw new Error("Erro ao deletar oxigênio: " + error.message);
       }
   }
}

module.exports = OxigenioFacade;
