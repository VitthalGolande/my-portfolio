
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Education from './Component/Education';
import Contact from './Component/Contact';
import Projects from './Component/Projects';


function App() {
  
  return (
    <div className="App" >
     
    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/education' element={<Education/>}/>
      <Route path='/project' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>


    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
