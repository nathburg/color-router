import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import ColorDisplay from './Components/Color Display/ColorDisplay';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route path='/rgb/:r/:g/:b' component={ColorDisplay} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
