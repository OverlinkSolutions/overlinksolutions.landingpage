import * as React from "react";
import Typography from "../Typography";
import about_us from "./about_us.module.sass";

export default function AboutUs() {
  return (
    <>
    <section id={about_us.container} className="container autowrap">
      <Typography
        title="Alcance um novo público"
        description="Seu cliente, assim como você, está atento a novidades, e é importante que seu negócio esteja pronto para isso."
      />
      <Typography
        title="Quebre barreiras"
        description="Através de um site, você pode alcançar clientes de todo o mundo, sem precisar sair de casa."
      />
      <Typography
        title="Aumente suas visibilidade"
        description="Seu cliente pode conhecer seus produtos ou serviços de qualquer lugar, além de servir de cartão de visita para seu negócio."
      />
    </section>
    <section id={about_us.container} className="container row">
    <Typography
        title="Quem somos"
        description="A Overlink Solutions é uma empresa de desenvolvimento de websites modernos, com o objetivo de criar um novo ambiente para seu comércio, alcançando novos clientes, sem barreiras."
      />
    </section>
    </>
  );
}
