import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, useHistory } from "react-router-dom";
import LoadingScreen from "../Components/LoadingScreen";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (!user.isAuthenticated && !user.pending) history.push("/");
  });

  return (
    <Route
      {...rest}
      render={(props) => {
        if (user.isAuthenticated && !user.pending) {
          console.log("ifff")
          return <Component {...props} />;
        } else {
          console.log("elseeE")
          // return <LoadingScreen />;
          return <Component {...props} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
