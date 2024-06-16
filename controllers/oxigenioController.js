const { oxigenioFacade } = require('../dependency/injection');

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

const getAllOxigenios = async (req, res) => {
    try {
        const oxigenios = await oxigenioFacade.getAll();
        res.json(oxigenios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addOxigenio = async (req, res) => {
    try {
        const data = req.body;
        const novoOxigenio = await oxigenioFacade.add(data);
        res.status(201).json(novoOxigenio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateOxigenio = async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        await oxigenioFacade.update(id, newData);
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
    getOxigenioById,
    getAllOxigenios,
    addOxigenio,
    updateOxigenio,
    deleteOxigenio,
};
