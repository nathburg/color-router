import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './Components/Main/Main';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App"> 
      <Switch>
        <Route path='/rgb/:r/:g/:b' component={Main} />
        <Route exact path='/'>
          <Redirect to='/rgb/0/0/0' /> 
        </Route>
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
