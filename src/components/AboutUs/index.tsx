import * as React from "react";
import Typography from "../Typography";
import img_novoPublico from "../../images/icon_publico.png";
import img_quebreBarreiras from "../../images/icon_quebreBarreiras.png";
import img_aumenteVisibilidade from "../../images/icon_visibilidade.png";
import img_quemSomos from "../../images/icon_quemSomos.png";

import about_us from "./about_us.module.sass";
import { useMediaQuery } from "react-responsive";

type AboutUsProps = {
  refs: React.RefObject<HTMLDivElement>;
}

export default function AboutUs(props: AboutUsProps) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <section id={about_us.container_features} className="container column">
        <div id={about_us.container} className="container autowrap">
          <div id={about_us.item} className={"container column"}>
            <img src={img_novoPublico} alt="Alcance um novo público" />
            <Typography
              alignment="center"
              title="Alcance um novo público"
              description="Seu cliente, assim como você, está atento a novidades, e é importante que seu negócio esteja pronto para isso."
            />
          </div>
          <div id={about_us.item} className={"container column"}>
            <img src={img_quebreBarreiras} alt="Alcance um novo público" />
            <Typography
              alignment="center"
              title="Quebre barreiras"
              description="Através de um site, você pode alcançar clientes de todo o mundo, sem precisar sair de casa."
            />
          </div>
          <div id={about_us.item} className={"container column"}>
            <img src={img_aumenteVisibilidade} alt="Alcance um novo público" />
            <Typography
              alignment="center"
              title="Aumente suas visibilidade"
              description="Seu cliente pode conhecer seus produtos ou serviços de qualquer lugar, além de servir de cartão de visita para seu negócio."
            />
          </div>
        </div>
      </section>
      <section id={about_us.container} ref={props.refs} className="container row">
        <div id={about_us.item} className={"container autowrap"}>
          <img
            id={about_us.overlink}
            src={img_quemSomos}
            alt="Alcance um novo público"
          />
          <Typography
            alignment={isMobile ? "center": "left"}
            title="Quem somos"
            description="A Overlink Solutions é uma empresa de desenvolvimento de websites modernos, com o objetivo de criar um novo ambiente para seu comércio, alcançando novos clientes, sem barreiras."
          />
        </div>
      </section>
    </>
  );
}
