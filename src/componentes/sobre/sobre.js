import React from "react";
import NavBar from "../navbar/nav";
import twitter from "../../imagens/twitter.png";
import "./sobre.css";

export default function Sobre() {
  return (
    <div className="background height">
      <NavBar />
      <div className="page page-sobre">
        <h3>Sobre nos:</h3>
        <p>
          apenas uma pagina de projeto independente para aprender mais e
          praticar
        </p>
        <h3>caso queira algum personagem mande mensagem no e-mail:</h3>
        <p>curiosidadesAnim@gmail.com</p>
        <div className="social">
          <a
            href="https://twitter.com/AlguemGleidson"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/gleidson-guimar%C3%A3es-b927b2254/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://logospng.org/download/linkedin/logo-linkedin-icon-4096.png"
              alt="linkidin"
            />
          </a>
        </div>
        <p>criado e feito por Gleidson Guimarães</p>
      </div>
    </div>
  );
}
