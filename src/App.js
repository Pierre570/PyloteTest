import Home from './components/home/Home'
import Exercice  from './components/exercice/Exercice';
import End from './components/end/End'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/exercice' element={<Exercice/>}/>
          <Route path='/end' element={<End/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
