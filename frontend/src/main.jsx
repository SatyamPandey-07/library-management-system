import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./redux/store";

// Lazy load App for smoother UX
const App = lazy(() => import("./App"));

// Sexy full-screen loader
const Loader = () => (
  <div style={{
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0d1117",
    color: "#58a6ff",
    fontSize: "1.5rem",
    fontWeight: "bold",
    fontFamily: "monospace"
  }}>
    ⚡ Booting Library Magic...
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <App />
          <ToastContainer position="top-right" theme="dark" autoClose={3000} />
        </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
