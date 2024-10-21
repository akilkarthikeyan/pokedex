import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import DetailView from './pages/DetailView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detail/:id" element={<DetailView />} />
      </Routes>
    </Router>
  );
}

export default App;
