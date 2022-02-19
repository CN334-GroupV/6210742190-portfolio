import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Edit from "./components/edit/Edit";
import EditAbout from "./components/edit/EditAbout";
import EditContact from "./components/edit/EditContact";
import EditProjects from "./components/edit/EditProjects";
import EditSkills from "./components/edit/EditSkills";
import Navbar from "./components/edit/Navbar";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/edit/about">
            <Navbar />
            <EditAbout />
          </Route>
          <Route path="/edit/contact">
            <Navbar />
            <EditContact />
          </Route>
          <Route path="/edit/projects">
            <Navbar />
            <EditProjects />
          </Route>
          <Route path="/edit/skills">
            <Navbar />
            <EditSkills />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
