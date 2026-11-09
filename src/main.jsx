import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {Header, Question} from "./hello-world/HelloWorld.jsx";
import Container from "./hello-world/Container.jsx";

// Gunakan import css dimain js untuk file css yang memiliki skala global (digunakan dibanyak file jsx) agar traffic untuk mengambil resource tidak terlalu berat, serta untuk menerapkan modern programming architcutre
import "./hello-world/helloWorld.css"
import Todolist from "./todo-list/todoList.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Contoh penerapan Nested components dengan menggunakan magic props Children*/}
    <Container>
      <Header  headingText="Selamat Belajar React JS"/>
      <Question />
      <Todolist />
    </Container>

  </StrictMode>
)