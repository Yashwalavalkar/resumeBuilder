import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Myresume } from './components/Myresume';
import { Templete } from './components/Templete';
import { PersonalInfo } from './pages/PersonalInfo';
import { Workexperience } from './pages/Workexperience';
import Education from './pages/Education';
import {Resume1} from './resume/Resume1';
import {Resume2} from './resume/Resume2';
import {Resume3} from './resume/Resume3';
import {Resume4} from './resume/Resume4';
function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Home/>
        <Routes>
          <Route path='/template' element={<Templete/>}></Route>
          <Route path='/' element={<Templete/>}></Route>
          <Route path='/skills' element={<Skills/>}></Route>
          <Route path='/myresume' element={<Myresume/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path="/personalinfo" element={<PersonalInfo/>}></Route>
          <Route path='/workexperience' element={<Workexperience/>}></Route>
          <Route path='/education' element={<Education/>}></Route>
          <Route path='/resume1' element={<Resume1/>}></Route>
          <Route path='/resume2' element={<Resume2/>}></Route>
          <Route path='/resume3' element={<Resume3/>}></Route>
          <Route path='/resume4' element={<Resume4/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
