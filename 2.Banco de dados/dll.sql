create database SistemaDentista;
use SistemaDentista;

create table TB_LOGIN (
id_login int primary key auto_increment,
ds_cpf varchar (14),
ds_senha varchar(100)
);


create table TB_AGENDAMENTO (
ID_AGENDAMENTO  int primary key auto_increment,
ID_LOGIN 		int,
NM_PACIENTE 	varchar (100),
DS_EMAIL 		varchar (100),
DS_TELEFONE 	varchar(50),
HR_CONSULTA		time,
DT_CONSULTA		date,
DS_TIPO			varchar(50),
foreign key (id_login) references tb_login (id_login)

);

