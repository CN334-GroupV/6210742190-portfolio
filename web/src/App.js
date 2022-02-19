import './App.css';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      {/* <Dashboard></Dashboard> */}
      <Router>
        <Switch>
          <Route exact path='/' component={Dashboard}></Route>
          <Route path='/edit'></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
