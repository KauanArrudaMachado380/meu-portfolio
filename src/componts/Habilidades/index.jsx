import styled from './Habilidades.module.css';
import BR from 'country-flag-icons/react/3x2/BR';
import US from 'country-flag-icons/react/3x2/US';
import ES from 'country-flag-icons/react/3x2/ES';

const frontEnd =
    <div className={styled.cardFront}>
        <h2>Font-end</h2>
        <ul>
            <li>HTML & CSS</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Router-React</li>
            <li>Module styles</li>
        </ul>
    </div>;

const linguagem =
    <div className={styled.cardLinguagem}>
        <h2>Idiomas</h2>
        <ul>
            <li>Português (nativo) <BR title='Brasil' classname={styled.brasil}/></li>
            <li>Inglês (B2) <US title='Estados Unidos' classname={styled.usa}/></li>
            <li>Espanhol (A2) <ES title='Espanha' classname={styled.espanha}/></li>
        </ul>
    </div>;

const UiUx = 
    <div className={styled.cardUiUx}>
        <h2>UI/UX</h2>
        <ul>
            <li>Utilização do Figma para criar protótipos interativos e analisar layouts de UI/UX</li>
            <li>Habilidade em desenvolver interfaces responsivas utilizando <strong>Grid</strong> e <strong>Flexbox</strong>, garantindo uma boa experiência em diferentes dispositivos</li>
            <li>Implementação de boas práticas de UX, como navegação intuitiva</li>
        </ul>
    </div>;

const outras = 
    <div className={styled.cardOutros}>
        <h2>Outros</h2>
        <ul>
            <li>Git</li>
            <li>Node.js</li>
            <li>JSON.js</li>
        </ul>
    </div>;

const listaHabilidades = [frontEnd, linguagem, UiUx, outras];

function Habilidades () {
    return (
        <section className={styled.section}>
            <h1>Habilidades</h1>
            <div className={styled.containerCards}>
                {listaHabilidades.map((item) => {return(
                    item
                )})}
            </div>
        </section>
    )
}

export default Habilidades;