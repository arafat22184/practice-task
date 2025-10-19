import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomeLayout from "./layout/HomeLayout";
import { Provider } from "react-redux";
import store from "./app/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <HomeLayout />
    </Provider>
  </StrictMode>
);
