import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {Header, Question} from "./hello-world/HelloWorld.jsx";
import Container from "./hello-world/Container.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Contoh penerapan Nested components dengan menggunakan magic props Children*/}
    <Container>
      <Header  headingText="Selamat Belajar React JS"/>
      <Question />
    </Container>
  </StrictMode>
)