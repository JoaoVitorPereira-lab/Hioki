

-- carga inicial usuário admin
insert into tb_login (nm_doutor, ds_cpf, ds_senha)
	values ('Hioki','111.111.111-11','DoutorHioki');
    

-- CSU01:: efetuar login
select id_login 		id,
		nm_doutor 		  nome,
		ds_cpf			    cpf,
       ds_senha			senha
  from tb_login
 where ds_cpf 		= '111.111.111-11'
   and ds_senha		= 'DoutorHioki';
    
    -- CSU02:: cadastrar novo agendamento
insert into tb_agendamento (id_login, nm_paciente, ds_email, ds_telefone, hr_consulta, dt_consulta, ds_tipo)
values (1, 'José', 'luluminecraftbr@hotmail.com', '(11) 98724-0982', '12:20:00', '2022-05-14', 'Presencial');

	-- CSU03:: consultar todos os agendamentos 
SELECT id_login			'id',
	   id_agendamento   'agendamento',
	   nm_paciente		'nome',
       ds_email		    'email',
       ds_telefone	    'telefone',
       hr_consulta	    'horário',
	   DATE_FORMAT (dt_consulta,'%d/%m/%Y') AS 'data',
	   ds_tipo			'tipo'
  FROM tb_agendamento;

	-- CSU04:: alterar agendamento
UPDATE tb_agendamento 
   SET nm_paciente    = 'José',
       ds_email       = 'vasco2012@gmail.com',
       ds_telefone    = '(11) 1111-1111',
       hr_consulta    = '15:20:00',
       dt_consulta    = '2022-05-15',
       ds_tipo        = 'Presencial'
 WHERE id_agendamento = 4;
 
	-- CSU05:: remover agendamento
DELETE FROM tb_agendamento 
 WHERE id_agendamento = 1;
      
		
	-- CSU06:: consultar agendamento por nome
	
SELECT id_login			'id',
	   id_agendamento   'agendamento',
	   nm_paciente		'nome',
       ds_email		    'email',
       ds_telefone	    'telefone',
       hr_consulta	    'horário',
       DATE_FORMAT (dt_consulta,'%d/%m/%Y') AS 'data',
	   ds_tipo			'tipo'	
  FROM tb_agendamento
  WHERE nm_paciente			like '%a%';

  -- CSU07:: Consultar por ID
  SELECT id_login	 'usuário',
    id_agendamento   'id',
    nm_paciente		 'nome',
    ds_email		  'email',
    ds_telefone	     'telefone',
    hr_consulta	     'horário',
    DATE_FORMAT (dt_consulta,'%d/%m/%Y') AS 'data',
    ds_tipo			  	 'tipo'	
FROM tb_agendamento
WHERE id_agendamento = ?;

-- CSU08:: Consultar agendamentos de hoje
  SELECT id_login	 'usuário',
    id_agendamento   'id',
    nm_paciente		 'nome',
    ds_email		 'email',
    ds_telefone	     'telefone',
    hr_consulta	     'horário',
    DATE_FORMAT (dt_consulta,'%d/%m/%Y') AS 'data',
    ds_tipo			 'tipo'	
FROM tb_agendamento
where dt_consulta = curdate();

