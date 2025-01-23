import styled from "./Banner.module.css";


function Banner() {
    return (
        <section className={styled.container} id='Home'>
            <div className={styled.figure}>
                <h1>Olá! Seja bem-vindo ao meu portfólio – aqui, você vai descobrir como transformo desafios em soluções e ideias em resultados.</h1>
            </div>
        </section>
    )
}

export default Banner;