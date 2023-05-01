import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Detalhes from "./pages/detalhes";
import Login from "./pages/cadastro";

export default function RoutesConfig () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detalhes">
        <Route path=":movieId" element={<Detalhes />} />
      </Route>
      <Route path="/cadastro" element={<Login />} />
      <Route path="*" element={<h1>Página Não Encontrada!</h1>} />
    </Routes>
  );
}
