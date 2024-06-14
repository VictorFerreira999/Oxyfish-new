const Leitura = require('../entities/leitura');

class LeituraFactory {
  static criarLeitura(data) {
    return new Leitura(data);
  }
}

module.exports = LeituraFactory;
