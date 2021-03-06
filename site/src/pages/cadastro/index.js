import './index.scss';
import './style-320.scss';
import './style-360.scss';
import './style-568.scss';
import './style-768.scss';
import './style-800.scss';
import './style-880.scss';
import './style-960.scss';
import './style-1080.scss';
import './style-1140.scss';
import './style-1280.scss';
import './style-1366.scss';
import './style-1440.scss';
import './style-1680.scss';
import './style-1780.scss';
import './style-1920.scss';
import {cadastrarAgendamento, alterarAgendamento, BuscarPorID, EnviarEmail, EnviarFotoPaciente, buscarImagem} from '../../api/agendamentoApi'
import { Helmet } from 'react-helmet';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputMask from 'react-input-mask'
import storage from 'local-storage'
import { useEffect, useState } from 'react';

import {Link, useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function Cad() {

    const navigate = useNavigate();
    
    useEffect(() => {
        if (!storage('usuario-logado')){
            navigate('/login')
        }
    }, [])
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [data, setData] = useState(0);
    const [horário, setHorário] = useState(0);
    const [tipo, setTipo] = useState('');
    const [id, setId] = useState(0);
    const [foto, setFoto] = useState();

    const {idParam} = useParams();

    useEffect(() => {
        if(idParam){
            carregarAgendamento();
        }
    }, [])

    async function carregarAgendamento(){
        const resposta = await BuscarPorID(idParam);

        console.log(resposta);

        setNome(resposta.nome);
        setEmail(resposta.email);
        setTelefone(resposta.telefone);
        setData(resposta.data.substr(0, 10));
        setHorário(resposta.horário);
        setTipo(resposta.tipo);
        setId(resposta.id);
        setFoto(resposta.foto)
    }

   


    async function salvarClick(){
        try {   
            if(!foto){
                throw new Error("A foto é obrigatória")
            }

            const usuário = storage('usuario-logado').id;
            
            if(id === 0){
            const novoAgendamento = await cadastrarAgendamento(nome, email, telefone, data, horário, tipo, usuário);
            await EnviarFotoPaciente(novoAgendamento.id, foto)

            setId(novoAgendamento.id)
            toast.success('Agendamento cadastrado com sucesso 🚀');
            }
            else{
                await alterarAgendamento(idParam, nome, email, telefone, data, horário, tipo, usuário);
                if(typeof(foto) == 'object'){
                    await EnviarFotoPaciente(idParam, foto)
                }
                toast.success('Agendamento alterado com sucesso 🚀');
            }

            await EnviarEmail(nome, email, telefone, data, horário, tipo);
            
            
            
            
        } catch (err) {
            if(err.response)
                toast.error(err.response.data.erro);  
            else{
                toast.error(err.message)
            }
        }
        
    }

    function novoClick(){
        setId(0);
        setNome('');
        setEmail('');
        setTelefone('');
        setData(0);
        setHorário(0);
        setTipo('');
        setFoto();
    }

    function EscolherFoto() {
        document.getElementById('ClickFoto').click();
     }
    
     function MostrarFoto() {
         if(typeof (foto) === 'object'){
        return URL.createObjectURL(foto)
         }
         else{
             return buscarImagem(foto)
         }

      }



    return(
    
    <body className='bd-cad'>
        <ToastContainer />
        <Helmet title='Novo agendamento'/>

        <section className="cadastre">
            
            <div className="quadrado">

                <div className="txt1">{id===0 ? 'AGENDAR' : 'ALTERAR'    } UMA CONSULTA DE UM PACIENTE</div>
                
                <div className="caixas">

                <div className="cx1">
                    <img className="user" src="/images/user.png" alt=""/> &nbsp;NOME 
                    <div className="t"> </div> 
                    
                    <input required="" className="caixatxt" placeholder='Insira o nome do paciente' value={nome} onChange={e => setNome(e.target.value)}/> 
                </div>
                
                <br/>

                <div className="cx2">
                    <img className="mail" src="/images/mail.png" alt=""/>&nbsp;EMAIL
                    <div className="t"> </div> 
                    
                    <input className="caixatxt2" placeholder='Insira o email do paciente' value={email} onChange={e => setEmail(e.target.value)}/> 
                </div>

                <br/>
                
                <div className="cx3"> 
                    <img className="tel" src="/images/telephone-call.png" alt=""/>&nbsp;TELEFONE
                    <div className="t"> </div> 
                    <InputMask type="tel" id="telefone" name="telefone" mask='(99) 99999-9999'
                     placeholder="Digite o telefone"  className="caixatxt3" value={telefone} onChange={e => setTelefone(e.target.value)}/>
                 
               
                </div>

                <br/>

                <div className="cx4">
                    <img className="calendar" src="/images/calendar.png" alt=""/>&nbsp;DATA
                    <div className="t"> </div> 
                    
                    <input type="date" id="data" name="data" className="caixatxt4" value={data} onChange={e => setData(e.target.value)}/> 
                    
                </div>

                    <div className="cx5">
                        <img className="clock" src="/images/clock.png" alt=""/>&nbsp;HORÁRIO
                        <div className="t"> </div> 
                    
                    <input type="time" className="caixatxt5" value={horário} onChange={e => setHorário(e.target.value)}/>
                    </div>
                    <br/>

                <div className='escolha'>
                <div className="cx6">
                    <img className="user" src="/images/user.png" alt=""/> &nbsp;TIPO
                    <div className="t"> </div> 
                    
                    <input required="" className="caixatxt6" placeholder='Online ou Presencial' value={tipo} onChange={e => setTipo(e.target.value)}/> 
                </div>
                        </div>
                        <div className='foto-upload' onClick={EscolherFoto}>
                            {!foto &&
                            <img src="/images/upload-free-icon-font.png"    ></img>
                            
                            }
                            {foto &&
                            <img className="foto-paciente" src={MostrarFoto()}/>
                            }
                            
                            <input type="file" id='ClickFoto' onChange={e  => setFoto(e.target.files[0])}/>
                        </div>


                    <button className="agend" onClick={salvarClick}>{id===0 ? 'AGENDAR' : 'ALTERAR'    }</button> &nbsp;
                    <button className="novo" onClick={novoClick}>NOVO</button>
                    <Link className="voltar" to='/admin'>VOLTAR</Link>
            </div>
            </div>

        </section>

        
    </body>
    )
}