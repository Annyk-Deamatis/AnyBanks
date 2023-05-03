import Styles from "./Section1.module.css"
import Icon1 from "../images/icon_cartao.png"
import Icon2 from "../images/icon_celular.png"
import Icon3 from "../images/icon_grupo.png"
import Icon4 from "../images/icon_dinheiro.png"
import Icon5 from "../images/icon_security.png"
import Icon6 from "../images/icons-carteira.png"
import moça from "../images/moça.png"

function Section(){
    return(
        <section id={Styles.container}>
            
            <div id={Styles.title_section}>
                <h5>POR QUE NÓS?</h5>
                <h1>Por que você deve usar <br /> nossos serviços </h1>
            </div>

            <div id={Styles.Servicos}>

                <div className={Styles.bloco}>

                    <div>
                        <img src={Icon1} alt="icon1" />
                    </div>
                    <div>
                    <h1>Cartão sem anuidade</h1>
                    <p>Débido, crédito, programa de pontos, cashback e muito mais.</p>
                    </div>
                </div>

                <div className={Styles.bloco}>

                    <div>
                        <img src={Icon2} alt="icon1" />
                    </div>
                    <div>
                    <h1>Conta Digital</h1>
                    <p>Plataformas digitais que são fáceis de usar e acessíveis de qualquer lugar.</p>
                    </div>
                </div>

                <div className={Styles.bloco}>

                    <div>
                        <img src={Icon3} alt="icon1" />
                    </div>
                    <div>
                    <h1>Sempre pronto</h1>
                    <p>Maior eficiência, rapidez e reduz custos e acelera o tempo de resposta aos clientes.</p>
                    </div>
                </div>

                <div className={Styles.bloco}>

                    <div>
                        <img src={Icon4} alt="icon1" />
                    </div>
                    <div>
                    <h1>Sempre pronto</h1>
                    <p>A análise de crédito é realizada por meio de algoritmos e software automatizados. maior flexibilidade nas taxas de juros e prazos de pagamento</p>
                    </div>
                </div>

                <div className={Styles.bloco}>

                    <div>
                        <img src={Icon5} alt="icon1" />
                    </div>
                    <div>
                    <h1>Sempre pronto</h1>
                    <p>Maior eficiência, rapidez e reduz custos e acelera o tempo de resposta aos clientes.</p>
                    </div>
                </div>

                <div className={Styles.bloco}>

                    <div>
                        <img src={Icon6} alt="icon1" />
                    </div>
                    <div>
                    <h1>Sempre pronto</h1>
                    <p>Maior eficiência, rapidez e reduz custos e acelera o tempo de resposta aos clientes.</p>
                    </div>
                </div>

            </div>

            <div id={Styles.Sobre_nos}>

                <div className={Styles.texto_sn}>
                    <h5>SOBRE NÓS</h5>
                    <h2>Tecnologia Moderna e <br />Avançada no AnyBanks</h2>
                    <p>Nós acreditamos que todos devem ter acesso a serviços financeiros de qualidade, e nossa fintech é dedicada a tornar isso uma realidade para todos os nossos clientes. Estamos sempre buscando novas maneiras de inovar e melhorar nossos serviços, para oferecer a melhor experiência possível aos nossos usuários.</p>
                </div>

                <div className={Styles.img_sn}>
                    <img src={moça} alt="moça com quebra cabeça" />
                </div>

            </div>
            
        </section>
        
    )
}

export default Section