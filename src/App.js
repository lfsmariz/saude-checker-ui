import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AdminPage from "./pages/AdminPage";
import RegisterPage from "./pages/RegisterPage";
import PlayerPage from "./pages/PlayerPage";

function App() {
  document.body.style.backgroundColor="springgreen"
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage/>
        </Route>

        <Route exact path="/player">
          <PlayerPage/>
        </Route>

        <Route exact path="/admin">
          <AdminPage/>
        </Route>

        <Route exact path="/register">
          <RegisterPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
