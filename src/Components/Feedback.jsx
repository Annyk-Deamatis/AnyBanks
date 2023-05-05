import Styles from "./Feedback.module.css"
import { FaStar } from 'react-icons/fa'
import pessoa from "../images/pessoa.jpeg"
import aspas from "../images/aspas.png"
import logo from  "../images/Meu projeto.png"
import facebook from  "../images/facebook.png"
import instagram from  "../images/insta.png"
import tik_tok from  "../images/tiktok.png"
import linkedin from  "../images/linkedin.png"

function Footer(){
    return(

        <section id={Styles.container_mvv}>

            <div id={Styles.container_feedback}>

                <img src={aspas} alt="aspas" className={Styles.img1} />
                
                <div className={Styles.feedbacks}>

                    <div className={Styles.caixa_feedbacks}>
                        <div><img src={pessoa} alt="pessoa" /></div>
                        <div className={Styles.icons}>
                            <h2>Felipe Mathias</h2>
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>

                        <div className={Styles.p}>
                            <p>Plataforma maravilhosa, desenvolvida por excelentes profissionais, muito inovadora.</p>
                        </div>
                    </div>

                </div>

                <div className={Styles.feedbacks}>

                    <div className={Styles.caixa_feedbacks}>
                        <div><img src={pessoa} alt="pessoa" /></div>
                        <div className={Styles.icons}>
                            <h2>Marcio Lopes</h2>
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>

                        <div className={Styles.p}>
                            <p>Estou muito feliz em fazer parte do AnyBank, plataforma segura e acessível.</p>
                        </div>
                    </div>

                </div>

                <div className={Styles.feedbacks}>

                    <div className={Styles.caixa_feedbacks}>
                        <div><img src={pessoa} alt="pessoa" /></div>
                        <div className={Styles.icons}>
                            <h2>Camila Fisher</h2>
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>

                        <div className={Styles.p}>
                            <p>A AnyBank trouxe soluções inovadoras para minha vida financeira, indico a todos!</p>
                        </div>
                    </div>

                </div>

                <div className={Styles.feedbacks}>

                    <div className={Styles.caixa_feedbacks}>
                        <div><img src={pessoa} alt="pessoa" /></div>
                        <div className={Styles.icons}>
                            <h2>Peter Rodrigues</h2>
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>

                        <div className={Styles.p}>
                            <p>Essa plataforma torna os serviços financeiros mais revolucionários, muito confiável e moderna.</p>
                        </div>
                    </div>

                </div>
                
                <img src={aspas} alt="aspas" className={Styles.img2}/>

            </div>

            

            <div id={Styles.Footer}>

                <div className={Styles.logofooter}>
                    <img src={logo} alt="logo" />
                </div>

                <div className={Styles.link_footer}>
                    <p>LOGIN</p>
                    <p>PRIVACIDADE DE DADOS</p>
                    <p>SOBRE O ANYBANK</p>
                    <p>CONTA DIGITAL</p>
                </div>

                <div className={Styles.redes_sociais}>
                    <h3>REDES SOCIAIS</h3>
                    <div className={Styles.redes_svg}>
                        <img src={facebook} alt="facebook" />
                        <img src={instagram} alt="instagram" />
                        <img src={tik_tok} alt="tik tok" />
                        <div className={Styles.linkedin}>
                        <img src={linkedin} alt=" linkedin" />
                        </div>
                    </div>
                </div>
            </div>


        </section>

    )

}

export default Footer