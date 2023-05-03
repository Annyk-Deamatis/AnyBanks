import Styles from "./Section2.module.css"
import cartao from "../images/cartão.png"
import conta_digital from "../images/celular.png"

function Section2(){
    return(

        <section id={Styles.Container}>
            
            <div className={Styles.cartao}>
                <h2>CARTÃO DE CRÉDITO</h2>
                <img src={cartao} alt="cartao" />
            </div>

            <div className={Styles.conta}>
                <img src={conta_digital} alt="conta digital" />
                <h2>CONTA DIGITAL DO ANYBANKS</h2>
            </div>

        </section>

    )

}

export default Section2