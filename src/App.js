import Login from "./pages/Login"
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";


function App () {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/">
        <Redirect to="/Login" />
      </Route>
      <Route path="/Homepage">
        <HomePage />
      </Route>
    </Switch>
    </BrowserRouter>
  )
}

export default App;
