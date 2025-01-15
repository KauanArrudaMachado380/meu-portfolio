import MenuItens from "../MenuItens";
import styled from './NavDesktop.module.css'


function NavDesktop() {
    return (
        <nav className={styled.navDesktop}>
            <MenuItens/>
        </nav>
    )
}

export default NavDesktop;