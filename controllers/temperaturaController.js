const { temperaturaFacade } = require('../dependency/injection');

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
        const temperatura = req.body;
        const novaTemperatura = await temperaturaFacade.add(temperatura);
        res.status(201).json(novaTemperatura);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateTemperatura = async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        await temperaturaFacade.update(id, newData);
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
