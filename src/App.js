import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App"> 
      <Switch>
        <Route path='/rgb/:r/:g/:b' component={Main} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
