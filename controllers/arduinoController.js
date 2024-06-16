const { arduinoFacade } = require('../dependency/injection');

const getAllArduinos = async (req, res) => {
    try {
        const arduinos = await arduinoFacade.getAll();
        res.json(arduinos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getArduinoById = async (req, res) => {
    try {
        const id = req.params.id;
        const arduino = await arduinoFacade.getById(id);
        if (!arduino) {
            res.status(404).json({ message: 'Arduino não encontrado' });
        } else {
            res.json(arduino);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addArduino = async (req, res) => {
    try {
        const arduino = req.body;
        const novoArduino = await arduinoFacade.add(arduino);
        res.status(201).json(novoArduino);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateArduino = async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        await arduinoFacade.update(id, newData);
        res.status(200).json({ message: 'Arduino atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteArduino = async (req, res) => {
    try {
        const id = req.params.id;
        await arduinoFacade.delete(id);
        res.status(200).json({ message: 'Arduino deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllArduinos,
    getArduinoById,
    addArduino,
    updateArduino,
    deleteArduino,
};
