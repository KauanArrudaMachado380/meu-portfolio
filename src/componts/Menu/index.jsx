import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

import styled from './Menu.module.css';

function Menu(){
    return (
        <div className={styled.menu}>
            <NavMobile/>
            <NavDesktop/>
        </div>
    )
}

export default Menu;