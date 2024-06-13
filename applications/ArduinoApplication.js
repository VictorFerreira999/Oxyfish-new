class ArduinoApplication {
   constructor(arduinoRepository) {
       this.arduinoRepository = arduinoRepository;
   }

   async getById(id) {
       try {
           const arduino = await this.arduinoRepository.getById(id);
           return arduino;
       } catch (error) {
           throw new Error("Erro ao obter Arduino por ID: " + error.message);
       }
   }

   async getAll() {
       try {
           const arduinos = await this.arduinoRepository.getAll();
           return arduinos;
       } catch (error) {
           throw new Error("Erro ao obter todos os Arduinos: " + error.message);
       }
   }

   async add(data) {
       try {
           const novoArduino = await this.arduinoRepository.add(data);
           return novoArduino;
       } catch (error) {
           throw new Error("Erro ao adicionar Arduino: " + error.message);
       }
   }

   async update(id, newData) {
       try {
           await this.arduinoRepository.update(id, newData);
       } catch (error) {
           throw new Error("Erro ao atualizar Arduino: " + error.message);
       }
   }

   async delete(id) {
       try {
           await this.arduinoRepository.delete(id);
       } catch (error) {
           throw new Error("Erro ao deletar Arduino: " + error.message);
       }
   }
}

module.exports = ArduinoApplication;
