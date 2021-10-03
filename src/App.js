import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import About from './webpages/About';
import Project from './webpages/Project';
import HomePage from './webpages/HomePage';
import ErrorPage from './webpages/ErrorPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
      
        <div className="MainPage">

          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/home" exact component={HomePage} />
            <Route path="/about" exact component={About} />
            <Route path="/project" exact component={Project} />
            <Route path="*" exact component={ErrorPage} />
            ErrorPage
          </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;
