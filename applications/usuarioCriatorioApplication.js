const IUsuarioCriatorioRepository = require("../interface/iUsuarioCriatorioRepository");

class UsuarioCriatorioApplication {
   constructor(usuarioCriatorioRepository) {
       this.usuarioCriatorioRepository = usuarioCriatorioRepository;
   }

   async getByUsuarioId(usuario_id) {
       try {
           const associacoes = await this.usuarioCriatorioRepository.getByUsuarioId(usuario_id);
           return associacoes;
       } catch (error) {
           throw new Error("Erro ao obter associações Usuário-Criadouro por ID de Usuário: " + error.message);
       }
   }

   async getByCriatorioId(criatorio_id) {
       try {
           const associacoes = await this.usuarioCriatorioRepository.getByCriatorioId(criatorio_id);
           return associacoes;
       } catch (error) {
           throw new Error("Erro ao obter associações Usuário-Criadouro por ID de Criatório: " + error.message);
       }
   }

   async add(usuario_id, criatorio_id) {
       try {
           const novaAssociacao = await this.usuarioCriatorioRepository.add(usuario_id, criatorio_id);
           return novaAssociacao;
       } catch (error) {
           throw new Error("Erro ao criar associação Usuário-Criadouro: " + error.message);
       }
   }

   async delete(usuario_id, criatorio_id) {
       try {
           await this.usuarioCriatorioRepository.delete(usuario_id, criatorio_id);
       } catch (error) {
           throw new Error("Erro ao deletar associação Usuário-Criadouro: " + error.message);
       }
   }
}

module.exports = UsuarioCriatorioApplication;
