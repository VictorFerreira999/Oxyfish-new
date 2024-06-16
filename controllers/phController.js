const { phFacade } = require('../dependency/injection');

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
        const ph = req.body;
        const novoPh = await phFacade.add(ph);
        res.status(201).json(novoPh);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updatePh = async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        await phFacade.update(id, newData);
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
