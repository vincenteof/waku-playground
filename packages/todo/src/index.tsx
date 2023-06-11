import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { serve } from "waku/client";
import "./index.css";

const domRoot = document.getElementById("root");
if (domRoot) {
  const root = createRoot(domRoot);
  const App = serve<{}>("App");
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
