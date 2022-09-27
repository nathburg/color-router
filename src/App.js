import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App"> 
      <Switch>
        <Route path='/rgb/:r/:g/:b' component={Main} />
        <Route exact path='/' component={Home} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
