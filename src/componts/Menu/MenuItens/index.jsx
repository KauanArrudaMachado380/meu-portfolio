import styled from './MenuItens.module.css'

function MenuItens() {
    return (
        <ul className={styled.ul}>
            <li>
                <a href="/#Home">Menu</a> 
            </li>
            <li>
                <a href="/#SobreMim">Sobre mim</a>
            </li>
            <li>
                <a href="/#Habilidades">Habilidades</a>
            </li>
            <li>
                <a href="/#Projetos">Projetos</a>
            </li>
            <li>
                <a href="/#Contatos">Contatos</a>
            </li>
        </ul>
    )
}

export default MenuItens;