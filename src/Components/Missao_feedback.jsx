import Styles from "./Missao_feedback.module.css"
import missao from "../images/iconMissao.png"
import visao from "../images/iconVisao.png"
import valores from "../images/iconValores.png"

function Missao(){
    return(

        <section id={Styles.container}>
            
            <div id={Styles.metologia}>

                <div className={Styles.missao}>
                    <img src={missao} alt="missão" />
                    <h2>Missão</h2>
                    <p>Oferecer soluções financeiras mais acessíveis e convenientes para seus clientes, além de promover a inclusão financeira e democratizar o acesso aos serviços financeiros.</p>
                </div>

                <div className={Styles.visao}>
                    <img src={visao} alt="visão" />
                    <h2>Visão</h2>
                    <p>Se tornar referência em inclusão financeira, alcançando públicos que antes não tinham acesso aos serviços financeiros, oferecendo soluções cada vez mais avançadas</p>
                </div>

                <div className={Styles.valores}>
                    <img src={valores} alt="valores" />
                    <h2>Valores</h2>
                    <p>Transparência, a ética, a segurança e a inovação, buscar constantemente novas ideias, soluções e tecnologias para aprimorar os serviços oferecidos</p>
                </div>

            </div>

        </section>

    )

}

export default Missao