import { WhatsAppOutlined } from "@ant-design/icons";
import { Button } from "antd";
import * as React from "react";
import { useMediaQuery } from "react-responsive";
import logo from "../../images/logo3.webp";
import header from "./header.module.sass";

type HeaderProps = {
  handleHeaderClick: (refName: number) => void;
};

export default function Header(props: HeaderProps) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (
    e:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (e.isTrusted) {
      let contactMessage =
        "Olá, tenho interesse em construir um site para minha empresa.";
      let encodedURI = encodeURI(contactMessage);
      window.open(
        "https://api.whatsapp.com/send?phone=5579996059338" +
          "&text=" +
          encodedURI
      );
    }
  };

  return (
    <header id={header.container} className="container row">
      <div id={header.logo_container} className="container">
        <img src={logo} alt="Logo" />
      </div>
      {isMobile ? (
        <nav id={header.btn_row} className="container row">
          <Button
            type="primary"
            onClick={(e) => handleClick(e)}
            ref={buttonRef}
          >
            <WhatsAppOutlined />
            Contato
          </Button>
        </nav>
      ) : (
        <nav id={header.btn_row} className="container row">
          <Button type="text" onClick={() => props.handleHeaderClick(0)}>
            Quem somos
          </Button>
          <Button type="text" onClick={() => props.handleHeaderClick(2)}>
            Nossos serviços
          </Button>
          <Button type="text" onClick={() => props.handleHeaderClick(1)}>
            Nossos trabalhos
          </Button>
          <Button
            type="primary"
            onClick={(e) => handleClick(e)}
            ref={buttonRef}
          >
            <WhatsAppOutlined />
            Contato
          </Button>
        </nav>
      )}
      <div id={header.animated_border}>&nbsp;</div>
    </header>
  );
}
