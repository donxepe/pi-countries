import './App.css';
import Cards from './components/countries';
import Detail from './components/detail';
import { Route, Routes } from 'react-router-dom'
import Activity from './components/activity';
import Landing from './components/landing';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <div>
          <img className='App-logo' src="./logo512.png" alt='react logo spinning'/>
          <span> Countries PI</span>
        </div>
        <div className='right-nav'>
          <span className='header-link'>
            <Link className='link' to={'/home'}>
              Home
            </Link>
          </span>
          <span className='header-link'>
            <Link className='link' to={'/activity'}>
              Create Activity
            </Link>
          </span>
        </div>
      </div>
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
