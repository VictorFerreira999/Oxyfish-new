const { oxigenioFacade } = require('../dependency/injection');
const EntityFactory = require('../factories/entityFactory');

const getAllOxigenios = async (req, res) => {
    try {
        const oxigenios = await oxigenioFacade.getAll();
        res.json(oxigenios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getOxigenioById = async (req, res) => {
    try {
        const id = req.params.id;
        const oxigenio = await oxigenioFacade.getById(id);
        if (!oxigenio) {
            res.status(404).json({ message: 'Oxigênio não encontrado' });
        } else {
            res.json(oxigenio);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addOxigenio = async (req, res) => {
    try {
        const { leitura_id, valor } = req.body;
        const tableName = 'oxigenio';
        const entity = EntityFactory.createEntity(tableName, { leitura_id, valor });

        if (entity.isOutOfRange()) {
            // Se estiver fora do intervalo, retorna um erro 400 com uma mensagem de alerta
            return res.status(400).json({ message: `Valor de oxigênio ${valor} está fora do intervalo aceitável.` });
        }

        const novoOxigenio = await oxigenioFacade.add({ leitura_id, valor });
        res.status(201).json(novoOxigenio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateOxigenio = async (req, res) => {
    try {
        const id = req.params.id;
        const { leitura_id, valor } = req.body;
        const tableName = 'oxigenio';
        const entity = EntityFactory.createEntity(tableName, { leitura_id, valor });

        if (entity.isOutOfRange()) {
            // Se estiver fora do intervalo, retorna um erro 400 com uma mensagem de alerta
            return res.status(400).json({ message: `Novo valor de oxigênio ${valor} está fora do intervalo aceitável.` });
        }

        await oxigenioFacade.update(id, { leitura_id, valor });
        res.status(200).json({ message: 'Oxigênio atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteOxigenio = async (req, res) => {
    try {
        const id = req.params.id;
        await oxigenioFacade.delete(id);
        res.status(200).json({ message: 'Oxigênio deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllOxigenios,
    getOxigenioById,
    addOxigenio,
    updateOxigenio,
    deleteOxigenio,
};
