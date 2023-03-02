import banner from "./banner.module.sass";
import bannerImg from "../../images/icon_formaDeConexao.png";

export default function Banner() {
  return (
    <section id={banner.container} className="container autowrap">
      <div id={banner.text} className="container column">
        <h1>Uma nova forma de conexão com seus clientes</h1>
        <div className="container column">
          <span>O nosso negócio</span>
          <span>é divulgar o seu.</span>
        </div>
      </div>
      <div id={banner.logo_container} className="container">
        <img src={bannerImg} alt="Forma de conexão com seu negócio" />
      </div>
    </section>
  );
}
