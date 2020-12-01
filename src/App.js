import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPageComponent/LandingPage";
import Auth from "./pages/AuthComponent/Auth";
import NotFound from "./pages/NotFoundComponent/NotFound";
import Profile from "./pages/ProfileComponent/Profile";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 page-full px-0">
            <Switch>
              <Route path= "/" exact component={LandingPage} />
              <Route path= "/auth" component={Auth} />
              <Route path= "/profile" component={Profile} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
