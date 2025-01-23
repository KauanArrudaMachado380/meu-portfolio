import styled from './ListaProjetos.module.css';
import data from '../../json/data.json';

import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

function ListaProjetos() {

    /* pegando o valor do data que está referenciando o data.json para criar cards */

    return (
        <ul className={styled.container}>
            {data.projetos.map((item) => {
                return (<li key={item.nome} className={styled.li}>
                    <h2>{item.nome}</h2>
                    <p>{item.descricao}</p>
                    <div className={styled.links}>
                        <a href={item.link} target="_blank" rel="noreferrer"><CiGlobe color='var(--cor-destaque)' size='40px' /></a>
                        <a href={item.github} target="_blank" rel="noreferrer"><FaGithub color='var(--cor-destaque)' size='40px' /></a>
                    </div>
                </li>)
            })}
        </ul>
    )
}

export default ListaProjetos;