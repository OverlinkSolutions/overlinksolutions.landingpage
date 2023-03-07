import * as React from "react";
import Typography from "../Typography";
import img_novoPublico from "../../images/icon_publico.png";
import img_quebreBarreiras from "../../images/icon_quebreBarreiras.png";
import img_aumenteVisibilidade from "../../images/icon_visibilidade.png";

import our_services from "./our_services.module.sass";

type OurServicesProps = {
  refs: React.RefObject<HTMLDivElement>;
}


export default function OurServices(props: OurServicesProps) {
  return (
    <>
      <section id={our_services.container_features} ref={props.refs} className="container column">
        <h1 id={our_services.title}>Nossos Serviços</h1>
        <div id={our_services.container} className="container autowrap">
          <div id={our_services.item} className={"container column"}>
            <img src={img_novoPublico} alt="Desenvolvimento de sites" />
            <Typography
              alignment="center"
              title="Desenvolvimento de sites"
              description="Criamos seus site de forma personalizada para o seu negócio, com um design adaptável para celular e computador."
            />
          </div>
          <div id={our_services.item} className={"container column"}>
            <img src={img_quebreBarreiras} alt="Hospedagem e domínio" />
            <Typography
              alignment="center"
              title="Hospedagem e domínio"
              description="Também registramos seu domínio e lidamos com a hospedagem, para que você não tenha que se preocupar com isso."
            />
          </div>
          <div id={our_services.item} className={"container column"}>
            <img src={img_aumenteVisibilidade} alt="Desenvolvimento de apps" />
            <Typography
              alignment="center"
              title="Desenvolvimento de apps"
              description="Precisa de algo mais específico? Sem problemas! Também desenvolvemos aplicativos para Android e iOS para o seu negócio."
            />
          </div>
        </div>
      </section>
    </>
  );
}
