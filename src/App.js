import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Suspense, lazy, useEffect, useState } from "react";
import UserRoutes from "./routes/UserRoutes/Index";
import LayoutRoutes from "./routes/LayoutRoutes/LayoutRoutes";
import NavBar from "./components/NavComponents/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { changeNavDilog } from "./redux/reducers/ducks/UsersDuck";

function App() {
  // const [accessToken, setAccessToken] = useState(false);
  const dispatch = useDispatch();
  const navrole = useSelector((state) => state.userDetails.currentNavModel);
  const accessToken = useSelector((state) => state.userDetails.loginResponse);
  console.log(navrole);
  useEffect(() => {
    if (!accessToken) {
      dispatch(changeNavDilog("TYPE_AUTH"));
    }
  }, [dispatch, accessToken]);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/*"
          element={!accessToken ? <UserRoutes /> : <LayoutRoutes />}
        />
      </Routes>
    </div>
  );
}

export default App;
