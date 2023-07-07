import React from "react";
import { createRoot } from "react-dom/client";
import { Header, Main } from "./components";

const root = createRoot(document.getElementById("app"));
root.render(
  <>
    <Header />
    <Main />
  </>
);
