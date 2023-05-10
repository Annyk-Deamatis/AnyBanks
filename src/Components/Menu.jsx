import Styles from "./Menu.module.css"
import logo from  "../images/Meu projeto.png"
import usuario from  "../images/icons8-music-robot-96.png"

function Menu(){
    return(
        <div id={Styles.Container}>

            <div id={Styles.imglogo}>
                <img src={logo} alt="logo" className={Styles.imglogo} />
            </div>

            <div id={Styles.Menu}>
                
                <div id={Styles.link}>
                    <p>Sobre nós</p>
                    <p>Conta digital</p>
                    <p>Cartão</p>
                </div>
                <div>
                    <img src={usuario} alt="usuario" className={Styles.usuario}/>
                </div>
            </div>

        </div>
    )
}

export default Menu