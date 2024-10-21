import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import DetailView from './pages/DetailView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cs409-mp2" element={<Home/>} />
        <Route path="/cs409-mp2/detail/:id" element={<DetailView />} />
      </Routes>
    </Router>
  );
}

export default App;
