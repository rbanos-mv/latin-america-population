import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CountryPage from './pages/CountryPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:idCountry" element={<CountryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
