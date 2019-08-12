import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NewCollections from "./pages/NewCollections";
import AboutUs from "./pages/AboutUs";
// import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <div>
          {/* <Home /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/newcollection" component={NewCollections} />
            <Route exact path="/aboutus" component={AboutUs} />
          </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
