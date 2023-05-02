import Styles from "./Home.module.css"

function Home(){
    return(
        <section id={Styles.home}>
            <div id={Styles.quadrado}>
                <h1><span>Cuidando</span> do seu dinheiro, para que você possa aproveitar a <br />vida ao máximo</h1>
                <p>Solução completa e inovadora para quem busca mais praticidade e facilidade na gestão de suas finanças</p>

                <button>Venha conferir</button>
            </div>
            
        </section>
    )
}

export default Home