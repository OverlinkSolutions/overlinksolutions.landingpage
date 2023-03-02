import * as React from "react";
import floating_logo from "./floating_logo.module.sass";
import logo from "../../images/icon_fundo.png";
import { useMediaQuery } from "react-responsive";

export default function FloatingLogo() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      {isMobile ? (
        <></>
      ) : (
        <div id={floating_logo.container} className="container">
          <img src={logo} alt="Overlink Solutions" />
        </div>
      )}
    </>
  );
}
