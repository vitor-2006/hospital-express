import { Consulta } from "./schema.js"

export const updateConsulta = async (data, descrisao, idMedico, idPaciente) => {
    try {
        const updatedConsulta = await Consulta.findByIdAndUpdate(
            id,
            {data, descrisao, idMedico, idPaciente },
            { new:true, runValidators:true }
        )
        return updatedConsulta
    } catch (error) {
        console.error('Erro ao atualizar a Consulta:', error.message)
        throw error
    }
}