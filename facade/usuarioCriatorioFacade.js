class UsuarioCriatorioFacade {
    constructor(usuarioCriatorioApplication) {
        this.usuarioCriatorioApplication = usuarioCriatorioApplication;
    }

    async add(data) {
        try {
            const novaAssociacao = await this.usuarioCriatorioApplication.add(data);
            return novaAssociacao;
        } catch (error) {
            throw new Error('Erro ao adicionar associação Usuário-Criatório: ' + error.message);
        }
    }

    async getById(usuario_id, criatorio_id) {
        try {
            const associacao = await this.usuarioCriatorioApplication.getById(usuario_id, criatorio_id);
            return associacao;
        } catch (error) {
            throw new Error('Erro ao obter associação Usuário-Criatório por ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const associacoes = await this.usuarioCriatorioApplication.getAll();
            return associacoes;
        } catch (error) {
            throw new Error('Erro ao obter todas as associações Usuário-Criatório: ' + error.message);
        }
    }

    async update(usuario_id, criatorio_id, newData) {
        try {
            await this.usuarioCriatorioApplication.update(usuario_id, criatorio_id, newData);
        } catch (error) {
            throw new Error('Erro ao atualizar associação Usuário-Criatório: ' + error.message);
        }
    }

    async delete(usuario_id, criatorio_id) {
        try {
            await this.usuarioCriatorioApplication.delete(usuario_id, criatorio_id);
        } catch (error) {
            throw new Error('Erro ao deletar associação Usuário-Criatório: ' + error.message);
        }
    }
}

module.exports = UsuarioCriatorioFacade;
