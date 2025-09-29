import { Consulta } from "./schema.js"

export const getConsulta = async () => {
    try {
        return await Consulta.find()
    } catch (error) {
        console.log('erro ao buscar as consultas', error.message)
        throw error
    }
}