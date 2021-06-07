import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/menu" exact component={Menu}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/contact" exact component={Contact}></Route>

      </Switch>
      <Footer></Footer>
      </Router>
  
        </div>
  ); 
}

export default App;
