import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})
export async function login (cpf, senha){
    const r = await api.post('/usuario/login', {
            cpf: cpf,
            senha:senha
        });

        return r.data
}