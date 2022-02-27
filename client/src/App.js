import './App.css';
import Cards from './components/countries';
import Detail from './components/detail';
import { Route, Routes } from 'react-router-dom'
import Activity from './components/activity';
import Landing from './components/landing';

function App() {
  return (
    <div className="App">
      <h1>Podría ser una nav bar</h1>
      <Routes>
        <Route path='/home' element={<Cards />} />
        <Route path='/detail/:cID' element={<Detail />} />
        <Route path='/activity' element={<Activity />} />
        <Route path='/' element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
