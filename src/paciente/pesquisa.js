import { Paciente } from "./schema.js";

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }
  
export const pesqPorNome = async (nome) => {
    try {
      const safeNome = escapeRegex(nome);
      return await Paciente.find({ nome: { $regex: safeNome, $options: "i" } }).exec();
    } catch (error) {
      console.error('Erro ao pesquisar Paciente', error.message);
      throw error;
    }
}

export const pesqPorDataNascimento = async (dataNascimento) => {
    try {
      const safeDataNascimento = escapeRegex(dataNascimento);
      return await Paciente.find({ dataNascimento: { $regex: safeDataNascimento, $options: "i" } }).exec();
    } catch (error) {
      console.error('Erro ao pesquisar Paciente', error.message);
      throw error;
    }
}

export const verificPorIdPaciente = async (id) => {
  try {
    return await Paciente.find({id: id})
  } catch (error) {
    console.error('Erro ao pesquisar Medico', error.message);
    throw error;
  }
}