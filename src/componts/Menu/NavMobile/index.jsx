import { useState } from "react";
import MenuItens from "../MenuItens";
import styled from './NavMobile.module.css'

import { CgMenuRound } from "react-icons/cg";
import { SlClose } from "react-icons/sl";

function NavMobile() {

    /* Está gerenciando o estado do botão do menu hamburguer, e trocando o icone em questão */

    const [ativo, setAtivo] = useState(false); /* É responsável por alterar o valor do ativo, assim alterando os ícones */ 

    function isAtivo (){
        setAtivo(!ativo);
    }

    const MenuAberto = <CgMenuRound 
        size='40px' 
        className={styled.burger} 
        onClick={() => isAtivo()}/>

    const MenuFechado = <SlClose 
        size='33px' 
        className={styled.close} 
        onClick={() => isAtivo()}/>

    /* */

    return (
        <nav className={styled.navMobile}>
            {ativo? MenuFechado : MenuAberto}
            {ativo && <MenuItens/>}
        </nav>
    )
}

export default NavMobile;