const { peixeFacade } = require('../dependency/injection');

const getAllPeixes = async (req, res) => {
    try {
        const peixes = await peixeFacade.getAll();
        res.json(peixes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getPeixeById = async (req, res) => {
    try {
        const id = req.params.id;
        const peixe = await peixeFacade.getById(id);
        if (!peixe) {
            res.status(404).json({ message: 'Peixe não encontrado' });
        } else {
            res.json(peixe);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addPeixe = async (req, res) => {
    try {
        const peixe = req.body;
        const novoPeixe = await peixeFacade.add(peixe);
        res.status(201).json(novoPeixe);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updatePeixe = async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        await peixeFacade.update(id, newData);
        res.status(200).json({ message: 'Peixe atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deletePeixe = async (req, res) => {
    try {
        const id = req.params.id;
        await peixeFacade.delete(id);
        res.status(200).json({ message: 'Peixe deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllPeixes,
    getPeixeById,
    addPeixe,
    updatePeixe,
    deletePeixe,
};
