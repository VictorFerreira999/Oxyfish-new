const NivelOxigenio = require('../entities/NivelOxigenio');

class NivelOxigenioFactory {
    static criarNivelOxigenio(valor) {
        const nivelOxigenio = new NivelOxigenio(valor);
        const alerta = nivelOxigenio.verificarAlerta();
        if (alerta) {
            console.log(`Alerta: ${alerta}`);
        }
        return nivelOxigenio;
    }
}

module.exports = NivelOxigenioFactory;
