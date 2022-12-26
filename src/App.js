import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Index from "./Components/Pages/IndexPage/Index";
import Login from "./Components/Pages/LoginPages/Login";
import Register from "./Components/Pages/RegisterPages/Register";
import Boards from "./Components/Pages/BoardsPages/Boards";
import Board from "./Components/Pages/BoardPages/Board";
// import Alert from "./Components/AlertSnackBar";
// import { loadUser } from "./Services/userService";
// import Store from "./Redux/Store";
import ProtectedRoute from "./Utils/ProtectedRoute";
import FreeRoute from "./Utils/FreeRoute";
const App = () => {
  // useEffect(() => {
  //   loadUser(Store.dispatch);
  // }, []);
  return (
    <BrowserRouter>
      {/* <Alert /> */}
      <Switch>
        <ProtectedRoute exact path="/boards" component={Boards} />
        {/* <ProtectedRoute exact path="/board/:id" component={Board} /> */}
        <Route exact path="/boards/123" component={Board} />
        <FreeRoute exact path="/login" component={Login} />
        <FreeRoute exact path="/register" component={Register} />
        {/* <FreeRoute exact path="/" component={Index} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
