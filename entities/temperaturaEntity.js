class TemperaturaEntity {
   constructor(value) {
       this.value = value;
   }

   getValue() {
       return this.value;
   }

   setValue(value) {
       this.value = value;
   }

   isOutOfRange() {
       // Verifica se o valor está fora do padrão aceitável (exemplo de lógica simplificada)
       return this.value < 18.0 || this.value > 28.0;
   }
}

module.exports = TemperaturaEntity;
