import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import StaticList from "./components/StaticList/StaticList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StaticList />
  </StrictMode>
);
