class PhEntity {
    constructor({ leitura_id, valor }) {
        if (leitura_id == null) throw new Error('leitura_id é obrigatório');
        if (valor == null) throw new Error('valor é obrigatório');
        this.leitura_id = leitura_id;
        this.valor = valor;
    }

    isOutOfRange() {
        // Suponha que os valores aceitáveis para o pH estejam entre 6.5 e 8.5
        return this.valor < 6.5 || this.valor > 8.5;
    }
}

module.exports = PhEntity;
