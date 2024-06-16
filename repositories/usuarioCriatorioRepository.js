const IUsuarioCriatorioRepository = require("../interface/iUsuarioCriatorioRepository");
const { UsuarioCriatorio } = require("../data/dbContext");

class UsuarioCriatorioRepository extends IUsuarioCriatorioRepository {
    constructor() {
        super();
    }

    async add(data) {
        const { usuario_id, criatorio_id } = data;
        try {
            const novaAssociacao = await UsuarioCriatorio.create({ usuario_id, criatorio_id });
            return novaAssociacao;
        } catch (error) {
            throw new Error('Erro ao adicionar associação Usuário-Criadouro: ' + error.message);
        }
    }

    async getById(usuario_id, criatorio_id) {
        try {
            const associacao = await UsuarioCriatorio.findOne({ where: { usuario_id, criatorio_id } });
            return associacao;
        } catch (error) {
            throw new Error('Erro ao buscar associação Usuário-Criadouro por ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const associacoes = await UsuarioCriatorio.findAll();
            return associacoes;
        } catch (error) {
            throw new Error('Erro ao buscar todas as associações Usuário-Criadouro: ' + error.message);
        }
    }

    async update(usuario_id, criatorio_id, newData) {
        try {
            const associacao = await UsuarioCriatorio.findOne({ where: { usuario_id, criatorio_id } });
            if (!associacao) {
                throw new Error('Associação Usuário-Criadouro não encontrada');
            }
            await associacao.update(newData);
            return associacao;
        } catch (error) {
            throw new Error('Erro ao atualizar associação Usuário-Criadouro: ' + error.message);
        }
    }

    async delete(usuario_id, criatorio_id) {
        try {
            const associacao = await UsuarioCriatorio.findOne({ where: { usuario_id, criatorio_id } });
            if (!associacao) {
                throw new Error('Associação Usuário-Criadouro não encontrada');
            }
            await associacao.destroy();
        } catch (error) {
            throw new Error('Erro ao deletar associação Usuário-Criadouro: ' + error.message);
        }
    }
}

module.exports = UsuarioCriatorioRepository;
