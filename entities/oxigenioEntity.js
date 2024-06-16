class OxigenioEntity {
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
       return this.value < 5.0 || this.value > 10.0;
   }
}

module.exports = OxigenioEntity;
