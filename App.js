import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./home";
import ContactUs from "./contactus";
import Reviews from "./reviews";
import NotFound from "./notFound";
import Bookappointment from "./bookappointment";
import Signin from "./signin";
import Loggedin from "./loggedin";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <ContactUs />
          </Route>
          <Route exact path="/reviews">
            <Reviews />
          </Route>
          <Route exact path="/bookAppointment">
            <Bookappointment />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/loggedin">
            <Loggedin />
          </Route>
          <Route>
            <NotFound path="*" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
