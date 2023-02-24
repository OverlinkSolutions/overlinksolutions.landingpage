import banner from "./banner.module.sass";
import bannerImg from "../../images/coworking.jpg";

export default function Banner() {
  return (
    <section id={banner.container} className="container">
      <img src={bannerImg} alt="" />
      <div id={banner.text} className="container column">
        <h1>Uma nova forma de conexão com seus clientes</h1>
        <div className="container column">
          <span>O nosso negócio</span>
          <span>é divulgar o seu.</span>
        </div>
      </div>
    </section>
  );
}
