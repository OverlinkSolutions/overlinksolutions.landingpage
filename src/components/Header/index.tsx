import { Button } from "antd";
import * as React from "react";
import header from "./header.module.sass";

export default function Header() {
  return (
    <header id={header.container} className="container row">
      <div className="container">
        <img src="https://picsum.photos/180/50" alt="Logo" />
      </div>
      <nav id={header.btn_row} className="container row">
        <Button type="text">Quem somos</Button>
        <Button type="text">Nosso trabalho</Button>
        <Button type="primary">Contato</Button>
      </nav>
    </header>
  );
}
