import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Components/Main/Main';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/rgb/:r/:g/:b" element={<Main />} />
        <Route path="/" element={<Navigate to="/rgb/0/0/0" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
