// entities/Temperatura.js

class Temperatura {
    constructor(valor) {
        this.valor = valor;
    }

    verificarAlerta() {
        if (this.valor < 20 || this.valor > 30) {
            return 'Temperatura fora do intervalo esperado (20 - 30)';
        }
        return null; // Sem alerta
    }
}

module.exports = Temperatura;
