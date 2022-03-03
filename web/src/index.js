import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import your route components too

import Personalidade from "./pages/AvaliacaoComportamental";
import App from "./App";

render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={<Personalidade />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
