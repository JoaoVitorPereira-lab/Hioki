import {con} from "./connection.js"

export async function Login (cpf, senha){

    const comando = `
    select id_login id,
	nm_doutor 		nomedoutor,
	ds_cpf			cpf,
    ds_senha		senha
  from tb_login
 where ds_cpf 		= ?
   and ds_senha		= ?
    `

    const [linhas] = await con.query(comando, [cpf,senha])
    return linhas[0];

    
}   
