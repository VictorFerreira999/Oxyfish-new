class PeixeFacade {
    constructor(peixeApplication) {
        this.peixeApplication = peixeApplication;
    }

    async add(peixe) {
        try {
            const novoPeixe = await this.peixeApplication.add(peixe);
            return novoPeixe;
        } catch (error) {
            throw new Error("Erro ao adicionar peixe: " + error.message);
        }
    }

    async getById(id) {
        try {
            const peixe = await this.peixeApplication.getById(id);
            return peixe;
        } catch (error) {
            throw new Error("Erro ao obter peixe por ID: " + error.message);
        }
    }

    async getAll() {
        try {
            const peixes = await this.peixeApplication.getAll();
            return peixes;
        } catch (error) {
            throw new Error("Erro ao obter todos os peixes: " + error.message);
        }
    }

    async update(id, newData) {
        try {
            await this.peixeApplication.update(id, newData);
        } catch (error) {
            throw new Error("Erro ao atualizar peixe: " + error.message);
        }
    }

    async delete(id) {
        try {
            await this.peixeApplication.delete(id);
        } catch (error) {
            throw new Error("Erro ao deletar peixe: " + error.message);
        }
    }
}

module.exports = PeixeFacade;
