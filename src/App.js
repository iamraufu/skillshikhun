import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Course from './components/Course/Course';
import Admission from './components/Admission/Admission';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';

function App() {
  return (
    <Routes>
      <Route exact path ="/" element={<Home />} />

      <Route path ="/digital-marketing" element={<Course color='#2c3493' name="Digital Marketing" />} />
      <Route path ="/video-editing" element={<Course color='#653dae' name="Video Editing" />} />
      <Route path ="/web-development" element={<Course color='#13338b' name="Web Development" />} />
      <Route path ="/graphics-design" element={<Course color='#df8254' name="Graphics Design" />} />

      <Route path ="/admission" element={<Admission />} />
      <Route path ="/contact" element={<Contact />} />
      
      <Route path ="/login" element={<Login />} />

    </Routes>
  );
}

export default App;
