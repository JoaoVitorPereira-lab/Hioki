import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function cadastrarAgendamento(nome, email, telefone, data, horário, tipo, usuário){

    const resposta = await api.post('/agendamento', {
       
        nome: nome,
        email: email,
        telefone: telefone,
        horário: horário,
        data: data,
        tipo: tipo,
        usuário: usuário
    })
    return resposta.data;

}