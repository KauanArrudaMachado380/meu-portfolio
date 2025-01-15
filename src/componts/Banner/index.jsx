import styled from "./Banner.module.css";
import BannerImage from "../../assets/banner.jpg";

function Banner() {
    return (
        <section className={styled.container}>
            <figure className={styled.figure}>
                <img src={BannerImage} alt="banner" className={styled.banner} />
                <h1>Olá, bem-vindos ao meu site!</h1>
            </figure>
        </section>
    )
}

export default Banner;