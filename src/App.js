import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar.js";

import Home from "./pages/Home.js";
import Genesis from "./pages/Genesis.js";
import Roadmap from "./pages/Roadmap.js";
import Gallery from "./pages/Gallery.js";
import Wallet from "./pages/Wallet.js";
import FAQ from "./pages/FAQ.js";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route path="/genesis">
            <Genesis />
          </Route>
          <Route path="/roadmap">
            <Roadmap />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/wallet">
            <Wallet />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
