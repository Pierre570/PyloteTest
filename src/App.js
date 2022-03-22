import Home from './components/home/Home'
import Exercice  from './components/exercice/Exercice';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/exercice' element={<Exercice/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
