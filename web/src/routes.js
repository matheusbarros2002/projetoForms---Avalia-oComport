import { BrowserRouter, Routes, Route } from "react-router-dom";
import AvaliacaoComportamental from "./pages/AvaliacaoComportamental";
// import your route components too

export default function Routess() {
  return (
    (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AvaliacaoComportamental />}></Route>
        </Routes>
      </BrowserRouter>
    ),
    document.getElementById("root")
  );
}
