import './index.scss';
import './style-320.scss';
import './style-360.scss';
import './style-568.scss';
import './style-768.scss';
import './style-960.scss';
import './style-1080.scss';
import './style-1140.scss';
import './style-1280.scss';
import './style-1366.scss';
import './style-1920.scss';

export default function LP() {

    return(
    
    <body className='bd-lp'>
    
        <main className="faixas">

            <section className="me">

                <div className="bt-me">
                <a className="botao-me" href="../login"> Login </a> 
                </div>

                <div> 
                    <img src='../images/logo.jpg' className="logo-me"/> 
                </div>

                <div className="text-me">
                    <p> Dentistas especializados em ortodontia</p>
                </div>

                <div>
                    <h1 className="nome-me" >Dental Hioki</h1>
                </div>

                <div>
                    <p className="desc-me">O melhor consultório de São Paulo </p>
                </div>
                
            </section>

            <section className="diz">
            
                <div className="img-d">
                    <img src="../images/img f2-dent.png" className="img-f2" border="0"/>
                </div>

                <div className="tx-d">
                    <h1 className="h1-d"> Sobre a clínica </h1>
                    <p className="p-d"> Nossa clínica oferece os melhores profissionais, especializados em ortodontia e cirurgias dentárias. </p>
                </div>

            </section>

            <nav className="oque">

                <div className="img-oq">
                    <img src="../images/img f3-.png" className="img-f3" border="0"/>
                </div>

        
                <div className="tx-oq">
                    <h1 className="h1-oq"> Primeira Consulta On-line </h1>
                    <p className="p-oq"> A Dental Hioki disponibiliza para você, o paciente, uma primeira consulta on-line e totalmente facilitada. Entre já em contato com nossos dentistas! </p>
                    <div className="botao-anchor">
                        <a href="#anchor" className="botao-oq"> Contato </a>
                    </div>
                </div>

            </nav>

            <section className="a">

                <div className="img-a">
                    <img src="../images/c85b0e07b7800e73565e62d5c12910f7.png" className="img-f4" border="0"/>
                </div>

        
                <div className="tx-a">
                    <h1 className="h1-a"> Amanda Piccoli </h1>
                    <h1 className="h1-a2"> Paciente do consultório Hioki </h1>
                    <p className="p-a"> "Eu gosto muito do consultório Hioki pois o atendimento é excepcional além dos dentistas serem muitos profissionais."</p>
                </div>
                
            </section>

            <nav className="bios">

                <div className="img-b">
                    <img src="../images/Screenshot_18-removebg-preview.png" className="img-f5" border="0"/>
                </div>

        
                <div className="tx-b">
                    <h1 className="h1-b"> Fernando Meneguel </h1>
                    <h1 className="h1-b-2"> Paciente do consultório Hioki </h1>
                    <p className="p-b"> "O consultório é muito aconchegante, o atendimento é ótimo e o dentista Dr.Hioki é muito calmo e profissional."</p>
                </div>

            </nav>

            <footer>

                <section className="rd-rdsc">

                    <div className="txt-rd">
                        <img src="../images/Screenshot_19-removebg-preview.png" className="img-rd"/>
                        <p className="p-rd"> Siga-nos em nossas redes sociais </p>
                    </div>

                    <div className="rdsc">
                        <img src="../images/instagram-removebg-preview.png" className="rdsc-imgs"/>
                        <img src="../images/twitter-removebg-preview.png" className="rdsc-imgs"/>
                        <img src="../images/fb-removebg-preview.png" className="rdsc-imgs"/>
                        <img src="../images/youtube-removebg-preview.png" className="rdsc-imgs"/>
                    </div>

                </section>

                <hr className="hr-rd"/>

                <section className="rd-pt">

                    <p className="p-pt"> Conheça os nossos patrocinadores </p>

                    <img src="../images/Screenshot_20-removebg-preview.png" className="img-pt"/>
                
                </section>

                <hr className="hr-pt"/>

                <section className="rd-cnt">

                    <div className="cnt-nos">
                        <p> Contate-nos </p>
                        <div id="anchor"></div>
                    </div>

                    <div className="cnt">
                        <img src="../images/whatsapp-removebg-preview.png" className="img-cnt" /> (11) 95049-8855
                    </div>

                    <div className="cnt">
                        <img src="../images/gmail.png" className="rdsc-imgs-2" /> denthioki@gmail.com
                        
                    </div>

                </section>

            </footer>
        
        </main>  

    </body>
    )
}