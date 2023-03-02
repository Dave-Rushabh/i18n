import { createRoot } from "react-dom/client";

import App from "./App";

import { LangContextProvider } from "./LangContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <LangContextProvider>
    <App />
  </LangContextProvider>
);
