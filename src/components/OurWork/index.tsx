import * as React from "react";
import Typography from "../Typography";
import our_work from "./our_work.module.sass";
import work_fazendaModelo from "../../images/work_fazendaModelo.webp";
import work_liuEcoTyre from "../../images/work_liuEcoTyre.webp";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

type OurWorkProps = {
  refs: React.RefObject<HTMLDivElement>;
};

export default function OurWork(props: OurWorkProps) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <section
        id={our_work.container}
        ref={props.refs}
        className="container column"
      >
        <h1 id={our_work.title}>Nossos Trabalhos</h1>
        <div id={our_work.works_container} className="container column">
          <div id={our_work.work_item} className={"container column"}>
            <img src={work_fazendaModelo} alt="Alcance um novo público" />
            <Typography
              alignment={isMobile ? "center" : "left"}
              title="Fazenda Modelo"
              description="A Fazenda Modelo é uma reserva com várias áreas de lazer, como piscina, sauna e churrasqueira e com opções de quartos. Um ambiente perfeito para uma viagem de férias em família."
            />
          </div>
          <div id={our_work.work_item} className={"container column"}>
            {isMobile ? (
              <>
                <img src={work_liuEcoTyre} alt="Alcance um novo público" />
                <Typography
                  alignment={isMobile ? "center" : "right"}
                  title="Liu Eco Tyre"
                  description="A Liu Eco Tyre é uma empresa de pneus remolds, feitos com materiais de alta qualidade e durabilidade, carcaças selecionadas através de uma inspeção rigorosa, e são submetidos a uma série de testes para recebem a aprovação e o selo do INMETRO."
                />
              </>
            ) : (
              <>
                <Typography
                  alignment={isMobile ? "center" : "right"}
                  title="Liu Eco Tyre"
                  description="A Liu Eco Tyre é uma empresa de pneus remolds, feitos com materiais de alta qualidade e durabilidade, carcaças selecionadas através de uma inspeção rigorosa, e são submetidos a uma série de testes para recebem a aprovação e o selo do INMETRO."
                />
                <img src={work_liuEcoTyre} alt="Alcance um novo público" />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
