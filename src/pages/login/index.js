import './index.scss';

export default function Login() {

    return(    

    <body className='bd-login'>
   
        <main className="page1">
            <img className="logo" src="../images/Dental_Hioki__1_-removebg-preview.png"/>

            <section className="login"> 

                <div className="txt1">Login</div>
                <div><input className="cx1" type="email"/></div>
                <div className="txt2" >Senha</div>
                <div><input className="cx2" type="password"/></div>
            
                <br/>

                <a className="botao" href="../Admin"> Entrar </a>
                
                <br/>

                <a className="esq" href=""> Esqueceu a Senha</a>
            </section>

        </main>
    
    </body>
    )
}