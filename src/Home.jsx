import Cabecalho from "./partes/Cabecalho";
import Main from "./partes/Main";
import Rodape from "./partes/Rodape";

import styled from './Home.module.css'

function Home() {
  return (
    <div className={styled.home}>
      <Cabecalho/>
      <Main/>
      <Rodape/>
    </div>
  );
}

export default Home;
