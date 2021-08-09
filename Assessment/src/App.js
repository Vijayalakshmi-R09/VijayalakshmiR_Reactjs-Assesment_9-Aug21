import './App.css';
import Navigate from './Navigation/Navigate.js';
import { BrowserRouter as Router,Route,Switch,} from 'react-router-dom';
import Dashborad from './Dashboard/Dashborad';
import Register from './Dashboard/Register';
import ViewList from './Dashboard/ViewList';
import Logout from './logout/Logout';
function App() {
  return (
    <div className="App">
     
     <Navigate />
     <Router>
        <Switch>
          <Route path="/dashborad" exact component={Dashborad}></Route>  
          <Route path="/logout" exact component={Logout}></Route> 
          <Route path="/dashborad/viewlist" exact component={ViewList}></Route>  
          <Route path="/dashborad/register" exact component={Register}></Route>  
        </Switch>
     </Router>
    </div>
  );
}

export default App;
