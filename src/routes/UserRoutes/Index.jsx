// import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import { userRoutes } from "..";
import Missing from "../../modules/Missing";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { changeNavDilog } from "../../redux/reducers/ducks/UsersDuck";

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeNavDilog("TYPE_AUTH"));
  }, [dispatch]);
  return (
    <Routes>
      <Route path={"/"} element={<Navigate to={"/login"} replace />} />
      {userRoutes.map((route, index) => {
        return (
          <Route
            key={index}
            exact={true}
            path={`${route.path}`}
            element={<route.component />}
          />
        );
      })}
      <Route path="*" element={<Missing />} />
    </Routes>
  );
};

export default Index;
