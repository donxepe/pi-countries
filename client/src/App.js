import './App.css';
import Cards from './components/countries';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Henry Countries</h1>
      <Routes>
        <Route path='/home' element={<Cards />} />
      </Routes>
    </div>
  );
}

export default App;
