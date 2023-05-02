import Styles from "./Section1.module.css"

function Section(){
    return(
        <section id={Styles.container}>
            
            <div id={Styles.title_section}>
                <h5>POR QUE NÓS?</h5>
                <h1>Por que você deve usar <br /> nossos serviços </h1>
            </div>
            
        </section>
    )
}

export default Section