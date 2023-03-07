import * as React from "react";
import footer from "./footer.module.sass";
import logo from '../../images/logo3.png';

export default function Footer() {
  return (
    <>
      <footer id={footer.container} className="container autowrap">
      <aside id={footer.logo_container} className="container column">
        <img src={logo} alt="Logo" />
        <div className="container column">
          <span>O nosso negócio</span>
          <span>é divulgar o seu.</span>
        </div>
      </aside>
      <div>     
        <h2>Contato</h2>
        <p>
            Email: overlinksolutions@gmail.com
        </p>
        <p>
            Instagram: @overlinksolutions
        </p>
        <p>
            Whatsapp: (79) 99636-9613
        </p>
      </div>
      </footer>
    </>
  );
}