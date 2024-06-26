const { temperaturaFacade } = require('../dependency/injection');
const EntityFactory = require('../factories/entityFactory');

const getAllTemperaturas = async (req, res) => {
    try {
        const temperaturas = await temperaturaFacade.getAll();
        res.json(temperaturas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTemperaturaById = async (req, res) => {
    try {
        const id = req.params.id;
        const temperatura = await temperaturaFacade.getById(id);
        if (!temperatura) {
            res.status(404).json({ message: 'Temperatura não encontrada' });
        } else {
            res.json(temperatura);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addTemperatura = async (req, res) => {
    try {
        const { leitura_id, valor } = req.body;
        const tableName = 'temperatura';
        const entity = EntityFactory.createEntity(tableName, { leitura_id, valor });

        if (entity.isOutOfRange()) {
            // Se estiver fora do intervalo, retorna um erro 400 com uma mensagem de alerta
            return res.status(400).json({ message: `Valor de temperatura ${valor} está fora do intervalo aceitável.` });
        }

        const novaTemperatura = await temperaturaFacade.add({ leitura_id, valor });
        res.status(201).json(novaTemperatura);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateTemperatura = async (req, res) => {
    try {
        const id = req.params.id;
        const { leitura_id, valor } = req.body;
        const tableName = 'temperatura';
        const entity = EntityFactory.createEntity(tableName, { leitura_id, valor });

        if (entity.isOutOfRange()) {
            // Se estiver fora do intervalo, retorna um erro 400 com uma mensagem de alerta
            return res.status(400).json({ message: `Novo valor de temperatura ${valor} está fora do intervalo aceitável.` });
        }

        await temperaturaFacade.update(id, { leitura_id, valor });
        res.status(200).json({ message: 'Temperatura atualizada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteTemperatura = async (req, res) => {
    try {
        const id = req.params.id;
        await temperaturaFacade.delete(id);
        res.status(200).json({ message: 'Temperatura deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllTemperaturas,
    getTemperaturaById,
    addTemperatura,
    updateTemperatura,
    deleteTemperatura,
};
