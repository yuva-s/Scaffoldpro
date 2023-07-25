
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import Policy from "./pages/Policy";
import Details from "./pages/DetailsPage/Details";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/Register" component={Register} />
        <Route path="/Login" component={Login} />
        <Route path="/Home" component={Home} />
        <Route path="/productdetails" component={Details} />
        {/* <Route exact path="/" />

        <Router path="/Home">
          <Home />
        </Router>

        <Route path="/Register">
          <Register />
        </Route>

        <Route path="/Login">
          <Login />
        </Route>

        <Route path="/productDetails">
          <Details />
        </Route>
    */}

        {/* <Route path="/about" pages={About}>
          <About />
        </Route>

        <Route path="/services" pages={Services}>
          <Services />
        </Route>

        <Route path="/contact" pages={Contact}>
          <Contact />
        </Route>

        <Route path="/policy" pages={Policy}>
          <Policy />
        </Route> */}
      </Switch>
    </Router>
  );
}
export default App;
