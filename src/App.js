import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AdminPage from "./pages/AdminPage";
import RegisterPage from "./pages/RegisterPage";
import PlayerPage from "./pages/PlayerPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage/>
        </Route>

        <Route path="/player">
          <PlayerPage/>
        </Route>

        <Route path="/admin">
          <AdminPage/>
        </Route>

        <Route path="/register">
          <RegisterPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
