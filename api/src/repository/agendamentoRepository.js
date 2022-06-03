import {con} from './connection.js'


export async function inserirAgendamento (agendamento){
    const comando = 
    `
    insert into tb_agendamento (id_login, nm_paciente, ds_email, ds_telefone, hr_consulta, dt_consulta, ds_tipo)
    values (?, ?, ?, ?, ?, ?, ?);
    `

    const [resposta] = await con.query(comando, [agendamento.usuário, agendamento.nome, agendamento.email,agendamento.telefone, agendamento.horário, agendamento.data, agendamento.tipo]);

    agendamento.id = resposta.insertId;

    return agendamento;

}

export async function ConsultarTodos(){
    const comando =
    `
    SELECT id_login	 'usuário',
    id_agendamento   'id',
    nm_paciente		 'nome',
    ds_email		 'email',
    ds_telefone	     'telefone',
    hr_consulta	     'horário',
    dt_consulta      'data',
    ds_tipo			 'tipo'	
FROM tb_agendamento;
    `

    const [linhas] = await con.query(comando)
    return linhas
}

export async function alterarAgendamento(id, agendamento){
    const comando = 
    `
    UPDATE tb_agendamento 
   SET nm_paciente    = ?,
       ds_email       = ?,
       ds_telefone    = ?,
       hr_consulta    = ?,
       dt_consulta    = ?,
       ds_tipo        = ?
 WHERE id_agendamento = ?;
    `
    const [resposta] = await con.query (comando, [agendamento.nome, agendamento.email,agendamento.telefone, agendamento.horário, agendamento.data, agendamento.tipo, id]);
    return resposta.affectedRows
}

export async function removerAgendamento(id){
    const comando = 
    `
    DELETE FROM tb_agendamento 
    WHERE id_agendamento = ?;
    `

    const [resposta] = await con.query (comando, [id]);
    return resposta.affectedRows
}

export async function ListarporNome(nome){
    const comando =
    `
    SELECT id_login		'usuário',
	   id_agendamento   'id',
	   nm_paciente		'nome',
       ds_email		    'email',
       ds_telefone	    'telefone',
       hr_consulta	    'horário',
       dt_consulta     	'data',
	   ds_tipo			'tipo'	
  FROM tb_agendamento
  WHERE nm_paciente			like ?
    `

    const [linhas] = await con.query(comando, [`%${nome}%`])
    return linhas
}
export async function ListarporData(data){
    const comando =
    `
    SELECT id_login		'usuário',
	   id_agendamento   'id',
	   nm_paciente		'nome',
       ds_email		    'email',
       ds_telefone	    'telefone',
       hr_consulta	    'horário',
       dt_consulta     	'data',
	   ds_tipo			'tipo'	
  FROM tb_agendamento
  WHERE dt_consulta		like ?
    `

    const [linhas] = await con.query(comando, [`%${data}%`])
    return linhas
}
export async function ListarporHorario(horario){
    const comando =
    `
    SELECT id_login		'usuário',
	   id_agendamento   'id',
	   nm_paciente		'nome',
       ds_email		    'email',
       ds_telefone	    'telefone',
       hr_consulta	    'horário',
       dt_consulta     	'data',
	   ds_tipo			'tipo'	
  FROM tb_agendamento
  WHERE hr_consulta		like ?
    `

    const [linhas] = await con.query(comando, [`%${horario}%`])
    return linhas
}
export async function ListarporTipo(tipo){
    const comando =
    `
    SELECT id_login		'usuário',
	   id_agendamento   'id',
	   nm_paciente		'nome',
       ds_email		    'email',
       ds_telefone	    'telefone',
       hr_consulta	    'horário',
       dt_consulta     	'data',
	   ds_tipo			'tipo'	
  FROM tb_agendamento
  WHERE ds_tipo	        like ?
    `

    const [linhas] = await con.query(comando, [`%${tipo}%`])
    return linhas
}