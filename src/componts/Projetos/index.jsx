import styled from './Projetos.module.css'
import ListaProjetos from "../ListaProjetos";

function Projetos({id}){
    return(
        <section className={styled.container} id='Projetos'>
            <div className={styled.titulo}>
                <h1>Projetos</h1>
                <p>Projetos desenvolvidos durante meus estudos</p>
            </div>
            <div className={styled.containerProjetos}>
                <ListaProjetos/>
            </div>
        </section>
    )
}

export default Projetos;