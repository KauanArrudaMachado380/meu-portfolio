import { useState } from "react";
import MenuItens from "../MenuItens";
import styled from './NavMobile.module.css'

import { CgMenuRound } from "react-icons/cg";
import { SlClose } from "react-icons/sl";

function NavMobile() {

    const [active, setActive] = useState(false);

    function isActive (){
        setActive(!active);
    }

    const MenuAberto = <CgMenuRound 
        size='40px' 
        className={styled.burger} 
        onClick={() => isActive()}/>

    const MenuFechado = <SlClose 
        size='33px' 
        className={styled.close} 
        onClick={() => isActive()}/>

    return (
        <nav className={styled.navMobile}>
            {active? MenuFechado : MenuAberto}
            {active && <MenuItens/>}
        </nav>
    )
}

export default NavMobile;