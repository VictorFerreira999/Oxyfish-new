const { usuarioCriatorioFacade } = require('../dependency/injection');

const getAllUsuarioCriatorio = async (req, res) => {
    try {
        const usuarioCriatorio = await usuarioCriatorioFacade.getAll();
        res.json(usuarioCriatorio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUsuarioCriatorioById = async (req, res) => {
    try {
        const id = req.params.id;
        const usuarioCriatorio = await usuarioCriatorioFacade.getById(id);
        if (!usuarioCriatorio) {
            res.status(404).json({ message: 'Relação Usuário-Criatório não encontrada' });
        } else {
            res.json(usuarioCriatorio);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addUsuarioCriatorio = async (req, res) => {
    try {
        const { usuario_id, criatorio_id } = req.body;
        const novaRelacao = await usuarioCriatorioFacade.add(usuario_id, criatorio_id);
        res.status(201).json(novaRelacao);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUsuarioCriatorio = async (req, res) => {
    try {
        const { usuario_id, criatorio_id } = req.params;
        await usuarioCriatorioFacade.delete(usuario_id, criatorio_id);
        res.status(200).json({ message: 'Relação Usuário-Criatório deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllUsuarioCriatorio,
    getUsuarioCriatorioById,
    addUsuarioCriatorio,
    deleteUsuarioCriatorio,
};
