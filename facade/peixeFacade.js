class PeixeFacade {
    constructor(peixeApplication) {
        this.peixeApplication = peixeApplication;
    }

    async add(data) {
        try {
            const novoPeixe = await this.peixeApplication.add(data);
            return novoPeixe;
        } catch (error) {
            throw new Error('Erro ao adicionar Peixe: ' + error.message);
        }
    }

    async getById(id) {
        try {
            const peixe = await this.peixeApplication.getById(id);
            return peixe;
        } catch (error) {
            throw new Error('Erro ao obter Peixe por ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const peixes = await this.peixeApplication.getAll();
            return peixes;
        } catch (error) {
            throw new Error('Erro ao obter todos os Peixes: ' + error.message);
        }
    }

    async update(id, newData) {
        try {
            await this.peixeApplication.update(id, newData);
        } catch (error) {
            throw new Error('Erro ao atualizar Peixe: ' + error.message);
        }
    }

    async delete(id) {
        try {
            await this.peixeApplication.delete(id);
        } catch (error) {
            throw new Error('Erro ao deletar Peixe: ' + error.message);
        }
    }
}

module.exports = PeixeFacade;
