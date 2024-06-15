const IUsuarioCriatorioRepository = require("../interface/iUsuarioCriatorioRepository");
const { UsuarioCriatorio } = require("../data/dbContext");

class UsuarioCriatorioRepository extends IUsuarioCriatorioRepository {
    constructor() {
        super();
    }

    async getByUsuarioId(usuario_id) {
        try {
            const usuarioCriatorio = await UsuarioCriatorio.findAll({
                where: { usuario_id }
            });
            return usuarioCriatorio;
        } catch (error) {
            throw new Error('Erro ao buscar associações Usuário-Criadouro: ' + error.message);
        }
    }

    async getByCriatorioId(criatorio_id) {
        try {
            const usuarioCriatorio = await UsuarioCriatorio.findAll({
                where: { criatorio_id }
            });
            return usuarioCriatorio;
        } catch (error) {
            throw new Error('Erro ao buscar associações Usuário-Criadouro: ' + error.message);
        }
    }

    async add(usuario_id, criatorio_id) {
        try {
            const newUsuarioCriatorio = await UsuarioCriatorio.create({ usuario_id, criatorio_id });
            return newUsuarioCriatorio;
        } catch (error) {
            throw new Error('Erro ao criar associação Usuário-Criadouro: ' + error.message);
        }
    }

    async delete(usuario_id, criatorio_id) {
        try {
            await UsuarioCriatorio.destroy({
                where: { usuario_id, criatorio_id }
            });
        } catch (error) {
            throw new Error('Erro ao deletar associação Usuário-Criadouro: ' + error.message);
        }
    }
}

module.exports = UsuarioCriatorioRepository;
