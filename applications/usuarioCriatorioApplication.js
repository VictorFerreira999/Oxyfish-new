class UsuarioCriatorioApplication {
    constructor(usuarioCriatorioRepository) {
        this.usuarioCriatorioRepository = usuarioCriatorioRepository;
    }

    async add(data) {
        try {
            const novoUsuarioCriatorio = await this.usuarioCriatorioRepository.add(data);
            return novoUsuarioCriatorio;
        } catch (error) {
            throw new Error('Erro ao adicionar usuário ao criatório: ' + error.message);
        }
    }

    async getById(usuario_id, criatorio_id) {
        try {
            const usuarioCriatorio = await this.usuarioCriatorioRepository.getById(usuario_id, criatorio_id);
            return usuarioCriatorio;
        } catch (error) {
            throw new Error('Erro ao buscar associação usuário-criatório por ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const usuariosCriatorios = await this.usuarioCriatorioRepository.getAll();
            return usuariosCriatorios;
        } catch (error) {
            throw new Error('Erro ao buscar todas as associações usuário-criatório: ' + error.message);
        }
    }

    async update(usuario_id, criatorio_id, newData) {
        try {
            await this.usuarioCriatorioRepository.update(usuario_id, criatorio_id, newData);
        } catch (error) {
            throw new Error('Erro ao atualizar associação usuário-criatório: ' + error.message);
        }
    }

    async delete(usuario_id, criatorio_id) {
        try {
            await this.usuarioCriatorioRepository.delete(usuario_id, criatorio_id);
        } catch (error) {
            throw new Error('Erro ao deletar associação usuário-criatório: ' + error.message);
        }
    }
}

module.exports = UsuarioCriatorioApplication;
