import banner from "./banner.module.sass";
import bannerImg from "../../images/icon_formaDeConexao.webp";
import favicon from "../../images/favicon.png";

export default function Banner() {
  return (
    <section id={banner.container} className="container autowrap">
      <div id={banner.text} className="container column">
        <div className="container column">
          <div id={banner.logo_overlink} className="container">
            <img src={favicon} alt="Forma de conexão com seu negócio" />
            <div>&nbsp;</div>
          </div>
          <h1>Uma nova forma de</h1>
          <h1 id={banner.conexao}>conexão</h1>
          <h1>com seus clientes</h1>
        </div>
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
