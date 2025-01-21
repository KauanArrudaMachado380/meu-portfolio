import styled from './Contatos.module.css'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Contatos() {
    return (
        <section className={styled.container}>
            <h1>Contatos: </h1>
            <div className={styled.links}>
                <a href="https://github.com/KauanArrudaMachado" target="_blank" rel="noreferrer"><FaGithub size='40px' /></a>
                <a href="https://www.linkedin.com/in/kauanarrudamachado/" target="_blank" rel="noreferrer"><FaLinkedin size='40px' /></a>
                <a href="https://www.instagram.com/kauan_arruda20/" target="_blank" rel="noreferrer"><FaInstagram size='40px' /></a>

            </div>
        </section>
    )
}

export default Contatos;