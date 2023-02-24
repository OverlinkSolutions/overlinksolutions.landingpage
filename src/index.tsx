import React from "react";
import ReactDOM from "react-dom/client";
import "./index.sass";
import App from "./App";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#2BC6E8",
          colorTextBase: "#fff"
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
