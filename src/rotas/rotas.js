import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Conteudo from "../componentes/Conteudo";
import Curiosity from "../componentes/Curiosidade/curiosidades";
import CC from "../componentes/personagens/cc";
import Chizuru from "../componentes/personagens/chizuru";
import Emilia from "../componentes/personagens/emilia";
import Nagatoro from "../componentes/personagens/nagatoro";
import Nino from "../componentes/personagens/nino";
import Rem from "../componentes/personagens/Rem";
import Shinobu from "../componentes/personagens/shinobu";
import Violet from "../componentes/personagens/violet";
import Sobre from "../componentes/sobre/sobre";

export default function Rosas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exatch path="/" element={<Conteudo />} />
        <Route exatch path="/rem" element={<Rem />} />
        <Route path="/CC" element={<CC />} />
        <Route path="/nino" element={<Nino />}></Route>
        <Route path="/violet" element={<Violet />}></Route>
        <Route path="/shinobu" element={<Shinobu />}></Route>
        <Route path="/nagatoro" element={<Nagatoro />}></Route>
        <Route path="/chizuru" element={<Chizuru />}></Route>
        <Route path="/emilia" element={<Emilia />}></Route>
        <Route path="/curiosidades" element={<Curiosity />}>
          {" "}
        </Route>
        <Route path="/sobre" element={<Sobre />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
