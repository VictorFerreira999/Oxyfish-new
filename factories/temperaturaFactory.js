const Temperatura = require('../entities/Temperatura');

class TemperaturaFactory {
    static criarTemperatura(valor) {
        const temperatura = new Temperatura(valor);
        const alerta = temperatura.verificarAlerta();
        if (alerta) {
            console.log(`Alerta: ${alerta}`);
        }
        return temperatura;
    }
}

module.exports = TemperaturaFactory;
