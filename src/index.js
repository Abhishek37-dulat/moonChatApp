import ReactDOM from "react-dom/client";
import React, { Suspense, lazy } from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import customTheme from "./customeTheme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./redux/stores/GlobalStore";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import Spinner from "./modules/shared/Loader";
// import Loading from "./modules/Loading";
const Loading = lazy(() => import("./modules/Loading"));

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <React.StrictMode>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <Suspense fallback={<Loading />}>
                {" "}
                <ToastContainer
                  position="top-right"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  theme="dark"
                  pauseOnHover
                />
                <App />
              </Suspense>
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </React.StrictMode>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
