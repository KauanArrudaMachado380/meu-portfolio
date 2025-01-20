import BR from 'country-flag-icons/react/3x2/BR';
import US from 'country-flag-icons/react/3x2/US';
import ES from 'country-flag-icons/react/3x2/ES';
import styled from './Habilidades.module.css';

const frontEnd =
    <div className={styled.cardFront}>
        <h2>Font-end</h2>
        <ul>
            <li>Criação de interfaces com HTML e CSS</li>
            <li>Estilização avançada com Bootstrap</li>
            <li>Desenvolvimento dinâmico com JavaScript</li>
            <li>Construção de SPAs com React</li>
            <li>Gerenciamento de rotas com React Router</li>
            <li>Estilização escopada com CSS Modules</li>
        </ul>
    </div>;

const linguagem =
    <div className={styled.cardLinguagem}>
        <h2>Idiomas</h2>
        <ul>
            <li>Português (nativo) 
                <span>
                    <BR title="Brasil" className={styled.brasil} />
                </span>
            </li>
            <li>Inglês (B1 - Intermediário) 
                <span>
                    <US title="Estados Unidos" className={styled.usa} />
                </span>
            </li>
            <li>Espanhol (A2 - Básico) 
                <span>
                    <ES title="Espanha" className={styled.espanha} />
                </span>
            </li>
        </ul>
    </div>;

const UiUx = 
    <div className={styled.cardUiUx}>
        <h2>Ui/Ux</h2>
        <ul>
            <li>Utilização do Figma para criar protótipos interativos e analisar layouts de UI/UX</li>
            <li>Habilidade em desenvolver interfaces responsivas utilizando <strong>Grid</strong> e <strong>Flexbox</strong>.</li>
            <li>Implementação de boas práticas de UX, como navegação intuitiva</li>
        </ul>
    </div>;

const outras = 
    <div className={styled.cardOutros}>
        <h2>Outros</h2>
        <ul>
            <li>Controle de versões com Git</li>
            <li>Desenvolvimento com Node.js</li>
            <li>Manipulação de dados com JSON</li>
            <li>Edição básica de imagens</li>
            <li>Adaptabilidade e aprendizado rápido</li>
        </ul>
    </div>;

const listaHabilidades = [frontEnd, linguagem, UiUx, outras];

function Habilidades () {
    return (
        <section className={styled.section}>
            <h1>Minhas Habilidades</h1>
            <div className={styled.containerCards}>
                {listaHabilidades.map((item) => {return(
                    item
                )})}
            </div>
        </section>
    )
}

export default Habilidades;