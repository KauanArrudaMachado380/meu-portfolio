import { useState } from 'react';
import styled from './Contatos.module.css'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { LuMail, LuMailOpen } from "react-icons/lu";

function Contatos() {

    /* aqui está a logica por trás das troca do ícone do email */

    const [ativo, setAtivo] = useState(false); /* Esse useState controla quando o ícone é clicado */

    const emailClose = <LuMail size='40px' color='var(--cor-destaque)'onClick={isAtivo}/>;

    const emailOpen = <LuMailOpen size='40px' color='var(--cor-destaque)'  onClick={isAtivo}/>;

    function isAtivo() {
        setAtivo(!ativo);
    }
    
    /* */

    return (
        <section className={styled.container} id='Contatos'>
            <h1>Contatos: </h1>
            <div className={styled.links}>
                <a href="https://github.com/KauanArrudaMachado380" target="_blank" rel="noreferrer"><FaGithub  color='var(--cor-destaque)' size='40px' /></a>
                <a href="https://www.linkedin.com/in/kauanarrudamachado" target="_blank" rel="noreferrer"><FaLinkedin color='var(--cor-destaque)' size='40px' /></a>
                <a href="https://www.instagram.com/kauan_arruda20/" target="_blank" rel="noreferrer"><FaInstagram color='var(--cor-destaque)' size='40px' /></a>
                <a href="mailto:kauanarrudamachado15@gmail.com?subject=Assunto Aqui&body=Mensagem Aqui" >{ativo? emailOpen : emailClose}</a>
            </div>
        </section>
    )
}

export default Contatos;