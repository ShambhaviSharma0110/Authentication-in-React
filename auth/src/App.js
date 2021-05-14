import './App.css';
import Nav from './Components/Nav/Navbar';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Student from './Components/Pages/Student';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div class="container">
        <Route path="/" exact={true} component={Home} />
        <Route path="/student" exact={true} component={Student} />
        </div>
      </Router>
    </div>
  );
}

export default App;
