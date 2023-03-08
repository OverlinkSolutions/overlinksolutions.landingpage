import * as React from "react";
import banner from "./banner.module.sass";
import bannerImg from "../../images/icon_formaDeConexao.webp";
import favicon from "../../images/favicon.png";
import { useMediaQuery } from "react-responsive";
import "./arrows.sass";
import useWindowDimensions from "../../utils/useWindowDimensions";

export default function Banner() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    console.log(scrollPosition);
  }, [scrollPosition]);

  return (
    <section id={banner.container} className="container autowrap">
      <div id={banner.text} className="container column">
        <div id={banner.large} className="container column">
          {!isMobile && (
            <div id={banner.logo_overlink} className="container">
              <img src={favicon} alt="Forma de conexão com seu negócio" />
              <div>&nbsp;</div>
            </div>
          )}
          <h1>Uma nova forma de</h1>
          <h1 id={banner.conexao}>conexão</h1>
          <h1>com seus clientes</h1>
        </div>
        <div>
          <div
            className={scrollPosition > 100 ? "arrow arrow_disabled" : "arrow"}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {(!isMobile || scrollPosition > 100 ) && (
          <div id={banner.small} className="container column">
            <span>O nosso negócio</span>
            <span>é divulgar o seu.</span>
          </div>
        )}
      </div>
      <div id={banner.logo_container} className="container">
        <img src={bannerImg} alt="Forma de conexão com seu negócio" />
      </div>
    </section>
  );
}
