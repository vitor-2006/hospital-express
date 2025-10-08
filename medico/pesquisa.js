import { Medico } from "./schema.js";

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }
  
export const pesqPorNome = async (nome) => {
    try {
      const safeNome = escapeRegex(nome);
      return await Medico.find({ nome: { $regex: safeNome, $options: "i" } }).exec();
    } catch (error) {
      console.error('Erro ao pesquisar Medico', error.message);
      throw error;
    }
}

export const pesqPorEspecialidade = async (especialidade) => {
    try {
      const safeEspecialidade = escapeRegex(especialidade);
      return await Medico.find({ especialidade: { $regex: safeEspecialidade, $options: "i" } }).exec();
    } catch (error) {
      console.error('Erro ao pesquisar Medico', error.message);
      throw error;
    }
}

export const verificPorIdMedico = async (id) => {
  try {
    return await Medico.find({id: id})
  } catch (error) {
    console.error('Erro ao pesquisar Medico', error.message);
    throw error;
  }
}