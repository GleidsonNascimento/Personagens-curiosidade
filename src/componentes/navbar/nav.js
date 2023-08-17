import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  return (
    <div className="nav">
      <input type="checkbox" name="check" id="check" />
      <label for="check" class="mobile-menu">
        <div class="line1"></div>
        <div class="line1"></div>
        <div class="line3"></div>
      </label>
      <ul className="dropdown-menu drop">
        <li className="dropdown-menu">
          <Link to="/">Inicio</Link>
        </li>
        <li className="dropdown-menu">
          <Link to="/">Personagens</Link>
          <div className="dropdown-submenu">
            <ul className="item">
              <Link to="/rem"> Rem </Link>
            </ul>
            <ul className="item">
              <Link to="/CC">C.C.</Link>
            </ul>
            <ul className="item">
              <Link to="/nino">Nino Nakano</Link>
            </ul>
            <ul className="item">
              <Link to="/violet">Violet Evergarden</Link>
            </ul>
            <ul className="item">
              <Link to="/Shinobu">Shinobu oshino</Link>
            </ul>
            <ul className="item">
              <Link to="/nagatoro">Nagatoro</Link>
            </ul>
            <ul className="item">
              <Link to="/chizuru">Chizuru</Link>
            </ul>
            <ul className="item">
              <Link to="/emilia">Emilia</Link>
            </ul>
          </div>
        </li>
        <li className="dropdown-menu">
          <Link to="/curiosidades">Curiosidades</Link>
          <ul className="dropdown-submenu">
            <li className="item">
              <Link to="/curiosidades#rezero">Re:Zero</Link>
            </li>
            <li className="item">
              <Link to="/curiosidades#code">Code Geass</Link>
            </li>
            <li className="item">
              <Link to="/curiosidades#monogatari">Monogatari series</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown-menu">
          <Link to="/sobre">Sobre</Link>
        </li>
      </ul>
    </div>
  );
}
