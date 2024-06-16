const { phFacade } = require('../dependency/injection');
const EntityFactory = require('../factories/entityFactory');

const getAllPhs = async (req, res) => {
    try {
        const phs = await phFacade.getAll();
        res.json(phs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getPhById = async (req, res) => {
    try {
        const id = req.params.id;
        const ph = await phFacade.getById(id);
        if (!ph) {
            res.status(404).json({ message: 'Ph não encontrado' });
        } else {
            res.json(ph);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addPh = async (req, res) => {
    try {
        const { leitura_id, valor } = req.body;
        if (!leitura_id || !valor) {
            return res.status(400).json({ message: 'Campos leitura_id e valor são obrigatórios.' });
        }

        const tableName = 'ph';
        const entity = EntityFactory.createEntity(tableName, { leitura_id, valor });

        if (entity.isOutOfRange()) {
            // Se estiver fora do intervalo, retorna um erro 400 com uma mensagem de alerta
            return res.status(400).json({ message: `Valor de pH ${valor} está fora do intervalo aceitável.` });
        }

        const novoPh = await phFacade.add({ leitura_id, valor });
        res.status(201).json(novoPh);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updatePh = async (req, res) => {
    try {
        const id = req.params.id;
        const { leitura_id, valor } = req.body;
        if (!leitura_id && !valor) {
            return res.status(400).json({ message: 'Campos leitura_id e valor são obrigatórios.' });
        }

        const tableName = 'ph';
        const entity = EntityFactory.createEntity(tableName, { leitura_id, valor });

        if (entity.isOutOfRange()) {
            // Se estiver fora do intervalo, retorna um erro 400 com uma mensagem de alerta
            return res.status(400).json({ message: `Novo valor de pH ${valor} está fora do intervalo aceitável.` });
        }

        await phFacade.update(id, { leitura_id, valor });
        res.status(200).json({ message: 'Ph atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deletePh = async (req, res) => {
    try {
        const id = req.params.id;
        await phFacade.delete(id);
        res.status(200).json({ message: 'Ph deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllPhs,
    getPhById,
    addPh,
    updatePh,
    deletePh,
};
