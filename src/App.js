import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import SignUp from "./pages/SignUpComponent/SignUp.js";
import LandingPage from "./pages/LandingPageComponent/LandingPage";
import Auth from "./pages/AuthComponent/Auth";

function App() {
  return (
    <Router>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 page-full px-0">
            <Route path= "/" exact component={LandingPage} />
            <Route path= "/signup" component={SignUp} />
            <Route path= "/auth" component={Auth} />
          </div>
        </div>
      </div>
      {/* <Route path= "/" exact component={Home} />
            <Route path= "/signup" component={SignUp} /> */}
    </Router>
  );
}

export default App;
