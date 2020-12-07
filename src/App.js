import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './views/Dashboard'
import Management from './views/Management'
import Home from './views/Home'
import Logout from './views/Logout'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Router>
        <div className="main">
          <div>
            <Navbar />
          </div>
          <div>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/Dashboard' exact component={Dashboard} />
                <Route path='/Management' exact component={Management}/>
                <Route path='/Logout' exact component={Logout}/>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
