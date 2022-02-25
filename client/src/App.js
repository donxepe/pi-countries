import './App.css';
import Cards from './components/countries';
import Detail from './components/detail';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Henry Countries</h1>
      <Routes>
        <Route path='/home' element={<Cards />} />
        <Route path='/detail/:cID' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
