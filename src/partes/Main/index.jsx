import Banner from "../../componts/Banner";
import Habilidades from "../../componts/Habilidades";
import Projetos from "../../componts/Projetos";
import SobreMim from "../../componts/SobreMim";

import styled from './Main.module.css';

function Main () {
    return (
        <main className={styled.main}>
            <Banner/>
            <SobreMim/>
            <Habilidades/>
            <Projetos/>
        </main>
    )
}

export default Main;