import { Medico } from "./schema.js"
import { deleteConsultaPorMedico } from '../consulta/delete.js'

export const deleteMedico = async (id) => {
    try {
        deleteConsultaPorMedico(id)
        return await Medico.findByIdAndDelete(id)
    } catch (error) {
        console.error('Erro ao deletar medico:', error.message)
        throw error
    }
}
