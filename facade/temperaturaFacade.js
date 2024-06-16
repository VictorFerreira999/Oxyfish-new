class TemperaturaFacade {
   constructor(temperaturaApplication) {
       this.temperaturaApplication = temperaturaApplication;
   }

   async add(temperatura) {
       try {
           const novaTemperatura = await this.temperaturaApplication.add(temperatura);
           return novaTemperatura;
       } catch (error) {
           throw new Error("Erro ao adicionar temperatura: " + error.message);
       }
   }

   async getById(id) {
       try {
           const temperatura = await this.temperaturaApplication.getById(id);
           return temperatura;
       } catch (error) {
           throw new Error("Erro ao obter temperatura por ID: " + error.message);
       }
   }

   async getAll() {
       try {
           const temperaturas = await this.temperaturaApplication.getAll();
           return temperaturas;
       } catch (error) {
           throw new Error("Erro ao obter todas as temperaturas: " + error.message);
       }
   }

   async update(id, newData) {
       try {
           await this.temperaturaApplication.update(id, newData);
       } catch (error) {
           throw new Error("Erro ao atualizar temperatura: " + error.message);
       }
   }

   async delete(id) {
       try {
           await this.temperaturaApplication.delete(id);
       } catch (error) {
           throw new Error("Erro ao deletar temperatura: " + error.message);
       }
   }
}

module.exports = TemperaturaFacade;
