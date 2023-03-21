import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigations/Navbar';
import Home from './components/pages/Home';
import Poke from './components/pages/Poke';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/poke' element={<Poke/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App;
