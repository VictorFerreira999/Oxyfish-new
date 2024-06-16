// entities/Ph.js

class Ph {
    constructor(valor) {
        this.valor = valor;
    }

    verificarAlerta() {
        if (this.valor < 6.5 || this.valor > 8.5) {
            return 'pH fora do intervalo esperado (6.5 - 8.5)';
        }
        return null; // Sem alerta
    }
}

module.exports = Ph;
