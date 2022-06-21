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

export async function alterarAgendamento(id, nome, email, telefone, data, horário, tipo, usuário){

    const resposta = await api.put(`/agendamento/${id}`, {
       
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

export async function listarTodosAgendamentos(){
    const resposta = await api.get('/agendamento');
    return resposta.data;
} 

export async function listarPorNome(nome){
    const resposta = await api.get(`/agendamento/buscar/nome?nm=${nome}`);
    return resposta.data;
} 


export async function deletarAgendamento(id){
    const resposta = await api.delete(`/agendamento/${id}`);
    return resposta.status;
}

export async function BuscarPorID (id){
    const resposta = await api.get(`/agendamento/${id}`);
    return resposta.data
}
export async function BuscarDeHoje (){
    const resposta = await api.get('agendamento/hoje');
    return resposta.data;
}
export async function EnviarEmail(nome, email, telefone, data, horário, tipo){
    const resposta = await api.post('/enviar-email', {
        nome:nome, 
        email:email, 
        telefone:telefone, 
        data:data, 
        horário:horário, 
        tipo:tipo
        
    });
    return resposta.status;
}
export async function EnviarFotoPaciente(id, foto){
    const formData = new FormData();
    formData.append('foto', foto)
    const resposta = await api.put(`/agendamento/${id}/foto`, formData, {
        headers: { 
            "Content-Type": "multipart/form-data"
        },
    });
    return resposta.status;
}

export function buscarImagem(foto){
    console.log(`${api.getUri()}/${foto}`)
    return `${api.getUri()}/${foto}`
}