import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

function App() {
  return (
    <div className="App">
      <h1>Hello Lightning graph</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

