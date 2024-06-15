class UsuarioCriatorioFacade {
   constructor(usuarioCriatorioRepository) {
       this.usuarioCriatorioRepository = usuarioCriatorioRepository;
   }

   async getByUsuarioId(usuario_id) {
       return await this.usuarioCriatorioRepository.getByUsuarioId(usuario_id);
   }

   async getByCriatorioId(criatorio_id) {
       return await this.usuarioCriatorioRepository.getByCriatorioId(criatorio_id);
   }

   async add(usuario_id, criatorio_id) {
       return await this.usuarioCriatorioRepository.add(usuario_id, criatorio_id);
   }

   async delete(usuario_id, criatorio_id) {
       await this.usuarioCriatorioRepository.delete(usuario_id, criatorio_id);
   }
}

module.exports = UsuarioCriatorioFacade;
