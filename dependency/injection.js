const UsuarioRepository = require('../repositories/usuarioRepository');
const UsuarioApplication = require('../applications/usuarioApplication');
const UsuarioFacade = require('../facade/usuarioFacade');

const CriatorioRepository = require('../repositories/criatorioRepository');
const CriatorioApplication = require('../applications/criatorioApplication');
const CriatorioFacade = require('../facade/criatorioFacade');

const PeixeRepository = require('../repositories/peixeRepository');
const PeixeApplication = require('../applications/peixeApplication');
const PeixeFacade = require('../facade/peixeFacade');

const ArduinoRepository = require('../repositories/arduinoRepository');
const ArduinoApplication = require('../applications/arduinoApplication');
const ArduinoFacade = require('../facade/arduinoFacade');

const LeituraRepository = require('../repositories/leituraRepository');
const LeituraApplication = require('../applications/leituraApplication');
const LeituraFacade = require('../facade/leituraFacade');

const usuarioRepository = new UsuarioRepository();
const usuarioApplication = new UsuarioApplication(usuarioRepository);
const usuarioFacade = new UsuarioFacade(usuarioApplication);

const criatorioRepository = new CriatorioRepository();
const criatorioApplication = new CriatorioApplication(criatorioRepository);
const criatorioFacade = new CriatorioFacade(criatorioApplication);

const peixeRepository = new PeixeRepository();
const peixeApplication = new PeixeApplication(peixeRepository);
const peixeFacade = new PeixeFacade(peixeApplication);

const arduinoRepository = new ArduinoRepository();
const arduinoApplication = new ArduinoApplication(arduinoRepository);
const arduinoFacade = new ArduinoFacade(arduinoApplication);

const leituraRepository = new LeituraRepository();
const leituraApplication = new LeituraApplication(leituraRepository);
const leituraFacade = new LeituraFacade(leituraApplication);

module.exports = { 
    usuarioFacade, 
    criatorioFacade, 
    peixeFacade, 
    arduinoFacade, 
    leituraFacade
};
