import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DataProvider } from "./context/UserContext.jsx"; // ✅ named import
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <DataProvider>    {/* ✅ use DataProvider instead of UserContext */}
        <App />
      </DataProvider>
    </Provider>
  </StrictMode>
);
