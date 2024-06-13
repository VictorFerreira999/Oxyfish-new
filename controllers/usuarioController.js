const { usuarioFacade } = require('../dependency/injection');

const getUsuarioById = async (req, res) => {
    try {
        const id = req.params.id;
        const usuario = await usuarioFacade.getById(id);
        if (!usuario) {
            res.status(404).json({ message: 'Usuário não encontrado' });
        } else {
            res.json(usuario);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await usuarioFacade.getAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addUsuario = async (req, res) => {
    try {
        const data = req.body;
        const novoUsuario = await usuarioFacade.add(data);
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateUsuario = async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        await usuarioFacade.update(id, newData);
        res.status(200).json({ message: 'Usuário atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUsuario = async (req, res) => {
    try {
        const id = req.params.id;
        await usuarioFacade.delete(id);
        res.status(200).json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getUsuarioById,
    getAllUsuarios,
    addUsuario,
    updateUsuario,
    deleteUsuario,
};
