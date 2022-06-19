import './index.scss';
import './style-320.scss';
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
import { Helmet } from 'react-helmet';
import storage from 'local-storage'
import { login } from '../../api/usuarioApi.js'
import LoadingBar from 'react-top-loading-bar'
import{Link} from 'react-router-dom'
import InputMask from 'react-input-mask'
import { useState, useRef, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

export default function Login() {

    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();
    const ref = useRef();

    useEffect(() => {
        if(storage('usuario-logado')){
            navigate('/admin')
        }
    }, [])

    async function entrarClick(){
        ref.current.continuousStart();
        setCarregando(true);

        try{
        const r = await login(cpf, senha);
        storage('usuario-logado', r)

        setTimeout(() => {
            
            navigate('/Admin');
        }, 1500)
        ref.current.complete();
        

    } catch(err){
        ref.current.complete();
        setCarregando(false);
        if(err.response.status === 401){
            setErro(err.response.data.erro)
        }
    }
    }

    function mostrarOcultarSenha(){
        const senha = document.getElementById("senha");
        if(senha.type==="password")
            senha.type = "text";
        
        else 
        senha.type = "password"
    }

    document.addEventListener("keypress", function  (e) {
        if(e.key === "Enter"){
            const btn = document.querySelector("#send");
            btn.click();
        }
    })
  
    

    return(    
    <body className='bd-login'>
        <LoadingBar color='#f11946' ref={ref} />
        <Helmet title='Login'/>
   
        <main className="page1">
            <Link to="/">
            <img className="logo" src="../images/Dental_Hioki__1_-removebg-preview.png"/>
            </Link>

            <section className="login"> 
                <div className="txt1">
                    CPF
                    </div>
                <div>
                    <InputMask className="cx1" mask='999.999.999-99' type="text" placeholder='Insira seu CPF' value={cpf} onChange={e => setCpf(e.target.value)}/>
                </div>

                <div className="txt2" >
                    Senha
                    </div>
                <div>
                    <input className="cx2" type="password" placeholder='Insira sua Senha' id='senha' value={senha} onChange={e => setSenha(e.target.value)} />
                    <input className='cxconfirma' type="checkbox" onClick={mostrarOcultarSenha}></input>
                    </div>
            
                <br/>

                <button id='send' className="botao" onClick={entrarClick} disabled={carregando}> Entrar </button>
                
                <br/>

                <div className='invalido'>
                    {erro}
                </div>
                

            </section>

        </main>
    
    </body>
    )
}