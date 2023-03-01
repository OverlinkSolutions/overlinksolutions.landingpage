import * as React from "react";
import Typography from "../Typography";
import our_work from "./our_work.module.sass";

export default function OurWork() {
  return (
    <>
      <section id={our_work.container} className="container column">
        <h1 id={our_work.title}>Nossos Trabalhos</h1>
        <div id={our_work.works_container} className="container column">
          <div id={our_work.work_item}>
            <Typography
              title="Fazenda Modelo"
              description="A Fazenda Modelo é uma reserva com várias áreas de lazer, como piscina, sauna e churrasqueira e com opções de quartos. Um ambiente perfeito para uma viagem de férias em família."
            />
          </div>
          <div id={our_work.work_item}>
            <Typography
              title="Liu Eco Tyre"
              description="Procurando um pneu de qualidade e com um preço justo? A Liu Eco Tyre é a melhor opção para você. Com uma variedade de modelos e tamanhos, a Liu Eco Tyre é a melhor opção para você."
            />
          </div>
        </div>
      </section>
    </>
  );
}
