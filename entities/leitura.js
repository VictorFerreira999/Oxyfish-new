class Leitura {
   constructor(id, idSensor, idTemperatura, idPh, idNivelOxigenio) {
       this.id = id;
       this.idSensor = idSensor;
       this.idTemperatura = idTemperatura;
       this.idPh = idPh;
       this.idNivelOxigenio = idNivelOxigenio;
       this.alertas = this.verificarAlertas();
   }

   verificarAlertas() {
       const alertas = [];

       if (this.idPh < 6.5 || this.idPh > 8.5) {
           alertas.push('pH fora do intervalo esperado (6.5 - 8.5)');
       }

       if (this.idNivelOxigenio < 5 || this.idNivelOxigenio > 12) {
           alertas.push('Nível de oxigênio fora do intervalo esperado (5 - 12 mg/L)');
       }

       if (this.idTemperatura < 20 || this.idTemperatura > 30) {
           alertas.push('Temperatura fora do intervalo esperado (20 - 30°C)');
       }

       return alertas;
   }
}

module.exports = Leitura;
