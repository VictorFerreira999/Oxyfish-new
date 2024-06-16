// Importação dos repositórios
const UsuarioRepository = require('../repositories/usuarioRepository');
const CriatorioRepository = require('../repositories/criatorioRepository');
const PeixeRepository = require('../repositories/peixeRepository');
const ArduinoRepository = require('../repositories/arduinoRepository');
const LeituraRepository = require('../repositories/leituraRepository');
const PhRepository = require('../repositories/phRepository');
const TemperaturaRepository = require('../repositories/temperaturaRepository');
const OxigenioRepository = require('../repositories/oxigenioRepository');
const UsuarioCriatorioRepository = require('../repositories/usuarioCriatorioRepository');

// Importação das aplicações
const UsuarioApplication = require('../applications/usuarioApplication');
const CriatorioApplication = require('../applications/criatorioApplication');
const PeixeApplication = require('../applications/peixeApplication');
const ArduinoApplication = require('../applications/arduinoApplication');
const LeituraApplication = require('../applications/leituraApplication');
const PhApplication = require('../applications/phApplication');
const TemperaturaApplication = require('../applications/temperaturaApplication');
const OxigenioApplication = require('../applications/oxigenioApplication');
const UsuarioCriatorioApplication = require('../applications/usuarioCriatorioApplication');

// Importação das facades
const UsuarioFacade = require('../facade/usuarioFacade');
const CriatorioFacade = require('../facade/criatorioFacade');
const PeixeFacade = require('../facade/peixeFacade');
const ArduinoFacade = require('../facade/arduinoFacade');
const LeituraFacade = require('../facade/leituraFacade');
const PhFacade = require('../facade/phFacade');
const TemperaturaFacade = require('../facade/temperaturaFacade');
const OxigenioFacade = require('../facade/oxigenioFacade');
const UsuarioCriatorioFacade = require('../facade/usuarioCriatorioFacade');

// Instâncias dos repositórios
const usuarioRepository = new UsuarioRepository();
const criatorioRepository = new CriatorioRepository();
const peixeRepository = new PeixeRepository();
const arduinoRepository = new ArduinoRepository();
const leituraRepository = new LeituraRepository();
const phRepository = new PhRepository();
const temperaturaRepository = new TemperaturaRepository();
const oxigenioRepository = new OxigenioRepository();
const usuarioCriatorioRepository = new UsuarioCriatorioRepository();

// Instâncias das aplicações
const usuarioApplication = new UsuarioApplication(usuarioRepository);
const criatorioApplication = new CriatorioApplication(criatorioRepository);
const peixeApplication = new PeixeApplication(peixeRepository);
const arduinoApplication = new ArduinoApplication(arduinoRepository);
const leituraApplication = new LeituraApplication(leituraRepository);
const phApplication = new PhApplication(phRepository);
const temperaturaApplication = new TemperaturaApplication(temperaturaRepository);
const oxigenioApplication = new OxigenioApplication(oxigenioRepository);
const usuarioCriatorioApplication = new UsuarioCriatorioApplication(usuarioCriatorioRepository);

// Instâncias das facades
const usuarioFacade = new UsuarioFacade(usuarioApplication);
const criatorioFacade = new CriatorioFacade(criatorioApplication);
const peixeFacade = new PeixeFacade(peixeApplication);
const arduinoFacade = new ArduinoFacade(arduinoApplication);
const leituraFacade = new LeituraFacade(leituraApplication);
const phFacade = new PhFacade(phApplication);
const temperaturaFacade = new TemperaturaFacade(temperaturaApplication);
const oxigenioFacade = new OxigenioFacade(oxigenioApplication);
const usuarioCriatorioFacade = new UsuarioCriatorioFacade(usuarioCriatorioApplication);

// Exportação das facades
module.exports = {
    usuarioFacade,
    criatorioFacade,
    peixeFacade,
    arduinoFacade,
    leituraFacade,
    phFacade,
    temperaturaFacade,
    oxigenioFacade,
    usuarioCriatorioFacade
};
