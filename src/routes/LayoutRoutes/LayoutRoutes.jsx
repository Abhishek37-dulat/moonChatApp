import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Missing from "../../modules/Missing";
import { layoutRoutes, profileRoutes } from "..";
import {
  changeNavDilog,
  requestProfile,
} from "../../redux/reducers/ducks/UsersDuck";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const expenseLog = useSelector((state) => state.userDetails.loginResponse);

  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes("profile")) {
      dispatch(changeNavDilog("TYPE_PROFILE"));
    }
    if (path.includes("chat")) {
      dispatch(changeNavDilog("TYPE_LANDING"));
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(requestProfile({ token: expenseLog }));
  }, [expenseLog, dispatch, navigate]);

  useEffect(() => {
    if (expenseLog) {
      const path = window.location.pathname;
      if (path.includes("login")) {
        navigate("/chat");
      }
    }
  }, [expenseLog, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/chat" replace />} />
      {[...layoutRoutes, ...profileRoutes].map((route, index) => (
        <Route
          key={index}
          exact
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route path="*" element={<Missing />} />
    </Routes>
  );
};

export default Index;
