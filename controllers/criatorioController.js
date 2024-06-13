const { criatorioFacade } = require('../dependency/injection');

const getCriatorioById = async (req, res) => {
    try {
        const id = req.params.id;
        const criatorio = await criatorioFacade.getById(id);
        if (!criatorio) {
            res.status(404).json({ message: 'Criatório não encontrado' });
        } else {
            res.json(criatorio);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllCriatorios = async (req, res) => {
    try {
        const criatorios = await criatorioFacade.getAll();
        res.json(criatorios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addCriatorio = async (req, res) => {
    try {
        const data = req.body;
        const novoCriatorio = await criatorioFacade.add(data);
        res.status(201).json(novoCriatorio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateCriatorio = async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        await criatorioFacade.update(id, newData);
        res.status(200).json({ message: 'Criatório atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteCriatorio = async (req, res) => {
    try {
        const id = req.params.id;
        await criatorioFacade.delete(id);
        res.status(200).json({ message: 'Criatório deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getCriatorioById,
    getAllCriatorios,
    addCriatorio,
    updateCriatorio,
    deleteCriatorio,
};
