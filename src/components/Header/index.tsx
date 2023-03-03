import { Button } from "antd";
import * as React from "react";
import { useMediaQuery } from "react-responsive";
import logo from "../../images/logo3.png";
import header from "./header.module.sass";

export default function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isClickTriggeredByEffect, setIsClickTriggeredByEffect] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (buttonRef.current) {
        setIsClickTriggeredByEffect(true);
        buttonRef.current.click();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    if (isClickTriggeredByEffect) {
      setIsClickTriggeredByEffect(false);
      return;
    }

  };

  return (
    <header id={header.container} className="container row">
      <div id={header.logo_container} className="container">
        <img src={logo} alt="Logo" />
      </div>
      {isMobile ? (
        <nav id={header.btn_row} className="container row">
          <Button type="primary" ref={buttonRef}>
            Contato
          </Button>
        </nav>
      ) : (
        <nav id={header.btn_row} className="container row">
          <Button type="text">Quem somos</Button>
          <Button type="text">Nosso trabalho</Button>
          <Button type="primary" ref={buttonRef}>
            Contato
          </Button>
        </nav>
      )}
      <div id={header.animated_border}>&nbsp;</div>
    </header>
  );
}