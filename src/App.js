import React, { lazy, Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';
import PrivateOutlet  from './components/PrivateOutlet/PrivateOutlet';
const Home = lazy(() => import('./components/Home/Home'));
const Course = lazy(() => import('./components/Course/Course'));
const Admission = lazy(() => import('./components/Admission/Admission'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Login = lazy(() => import('./components/Login/Login'));

function App() {
  const renderLoader = () =>
    <div style={{position:'absolute',height:'100px',width:'100px',top:'50%',left:'50%',marginLeft:'-50px',marginTop:'-50px'}} class="spinner-border" role="status">
      <span class="sr-only"></span>
    </div>

  return (
    <AuthProvider>
      <Suspense fallback={renderLoader()}>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/digital-marketing" element={<Course color='#2c3493' name="Digital Marketing" />} />
        <Route path="/video-editing" element={<Course color='#653dae' name="Video Editing" />} />
        <Route path="/web-development" element={<Course color='#13338b' name="Web Development" />} />
        <Route path="/graphics-design" element={<Course color='#df8254' name="Graphics Design" />} />

        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<PrivateOutlet />}>
          <Route path="dashboard" element={<Dashboard />} /> 
        </Route>

        <Route path="/*" element={<NotFound />} />

      </Routes>
    </Suspense>
    </AuthProvider>
  );
}

export default App;
