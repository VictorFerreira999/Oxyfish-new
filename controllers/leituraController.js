const { leituraFacade } = require('../dependency/injection');

const getLeituraById = async (req, res) => {
    try {
        const id = req.params.id;
        const leitura = await leituraFacade.getById(id);
        if (!leitura) {
            res.status(404).json({ message: 'Leitura não encontrada' });
        } else {
            res.json(leitura);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllLeituras = async (req, res) => {
    try {
        const leituras = await leituraFacade.getAll();
        res.json(leituras);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addLeitura = async (req, res) => {
    try {
        const data = req.body;
        const novaLeitura = await leituraFacade.add(data);
        res.status(201).json(novaLeitura);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateLeitura = async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        const leituraAtualizada = await leituraFacade.update(id, newData);
        res.status(200).json(leituraAtualizada);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteLeitura = async (req, res) => {
    try {
        const id = req.params.id;
        await leituraFacade.delete(id);
        res.status(200).json({ message: 'Leitura deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getLeituraById,
    getAllLeituras,
    addLeitura,
    updateLeitura,
    deleteLeitura,
};
