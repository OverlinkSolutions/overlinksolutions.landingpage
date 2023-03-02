import { Button } from "antd";
import * as React from "react";
import logo from '../../images/logo3.png';
import header from "./header.module.sass";

export default function Header() {
  return (
    <header id={header.container} className="container row">
      <div id={header.logo_container} className="container">
        <img src={logo} alt="Logo" />
      </div>
      <nav id={header.btn_row} className="container row">
        <Button type="text">Quem somos</Button>
        <Button type="text">Nosso trabalho</Button>
        <Button type="primary">Contato</Button>
      </nav>
    </header>
  );
}
