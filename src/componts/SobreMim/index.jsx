import styled from "./SobreMim.module.css";
import fotoMinha from "../../assets/foto-de-perfil.jpg";


function SobreMim() {
    return(
        <article className={styled.article}>
            <div>
                <h1></h1>
                <p></p>
            </div>
            <img src={fotoMinha} alt='Foto do Kauan' />
        </article>
    )
}

export default SobreMim;