import styled from "./SobreMim.module.css";
import fotoMinha from "../../assets/fotoPerfil.jpg";


function SobreMim() {
    return(
        <article className={styled.article} id='SobreMim'>
            <h1>Sobre mim</h1>
            <div className={styled.container}>
                <div className={styled.card}>
                    <p>Olá! Meu nome é Kauan Arruda Machado, sou estudante de Análise e Desenvolvimento de Sistemas pela Universidade Paulista (Unip) e aspirante a desenvolvedor Front-end.
                    Sou apaixonado por tecnologia e gosto de resolver problemas. Estou sempre em busca de aprimorar minhas habilidades, explorar novas ferramentas e me manter atualizado com as tendências da área de desenvolvimento. </p>
                </div>
                <img src={fotoMinha} alt='Foto do Kauan' />
            </div>
        </article>
    )
}

export default SobreMim;