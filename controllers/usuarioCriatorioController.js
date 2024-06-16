const { usuarioCriatorioFacade } = require('../dependency/injection');

const getUsuarioCriatorioById = async (req, res) => {
    try {
        const id = req.params.id;
        const usuarioCriatorio = await usuarioCriatorioFacade.getById(id);
        if (!usuarioCriatorio) {
            res.status(404).json({ message: 'Associação Usuário-Criadouro não encontrada' });
        } else {
            res.json(usuarioCriatorio);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllUsuariosCriatorio = async (req, res) => {
    try {
        const usuariosCriatorio = await usuarioCriatorioFacade.getAll();
        res.json(usuariosCriatorio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addUsuarioCriatorio = async (req, res) => {
    try {
        const data = req.body;
        const novaAssociacao = await usuarioCriatorioFacade.add(data);
        res.status(201).json(novaAssociacao);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateUsuarioCriatorio = async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        await usuarioCriatorioFacade.update(id, newData);
        res.status(200).json({ message: 'Associação Usuário-Criadouro atualizada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUsuarioCriatorio = async (req, res) => {
    try {
        const id = req.params.id;
        await usuarioCriatorioFacade.delete(id);
        res.status(200).json({ message: 'Associação Usuário-Criadouro deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getUsuarioCriatorioById,
    getAllUsuariosCriatorio,
    addUsuarioCriatorio,
    updateUsuarioCriatorio,
    deleteUsuarioCriatorio,
};
