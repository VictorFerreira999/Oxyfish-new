class TemperaturaEntity {
    constructor(leitura_id, valor) {
        if (leitura_id == null) throw new Error('leitura_id é obrigatório');
        if (valor == null) throw new Error('valor é obrigatório');
        this.leitura_id = leitura_id;
        this.valor = valor;
    }

    isOutOfRange() {
        // Suponha que os valores aceitáveis para a temperatura estejam entre 0 e 40 graus Celsius
        return this.valor < 0 || this.valor > 40;
    }
}

module.exports = TemperaturaEntity;
