import React, { lazy, Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';
import PrivateOutlet from './components/PrivateOutlet/PrivateOutlet';
import AllCourses from './components/AllCourses/AllCourses';
import Checkout from './components/Checkout/Checkout';
import Success from './components/Checkout/Success';
import Fail from './components/Checkout/Fail';
import Cancel from './components/Checkout/Cancel';
import PrivateOutlet2 from './components/PrivateOutlet2/PrivateOutlet2';
import LoginForCheckout from './components/LoginForCheckout/LoginForCheckout';
import PurchaseCheckout from './components/PurchaseCheckout/PurchaseCheckout';
import Profile from './components/Dashboard/Profile/Profile';
import DLiveCourse from './components/Dashboard/DLiveCourse/DLiveCourse';
import DFreeClass from './components/Dashboard/DFreeClass/DFreeClass';
import DVideoCourse from './components/Dashboard/DVideoCourse/DVideoCourse';
import DPaymentHistory from './components/Dashboard/DPaymentHistory/DPaymentHistory';
import logo from './images/logo.png';
import Privacy from './components/Privacy/Privacy';
import Terms from './components/Terms/Terms';
import DLiveCourseVideo from './components/Dashboard/DLiveCourse/DLiveCourseVideo';
import DLiveCourseVideoB2 from './components/Dashboard/DLiveCourse/DLiveCourseVideoB2';
import DPrevFreeClass from './components/Dashboard/DPrevFreeClass/DPrevFreeClass';
import User from './components/User/User';
import DClassRecordings from './components/Dashboard/DClassRecordings/DClassRecordings';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
const Home = lazy(() => import('./components/Home/Home'));
const Course = lazy(() => import('./components/Course/Course'));
const Admission = lazy(() => import('./components/Admission/Admission'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Login = lazy(() => import('./components/Login/Login'));

function App() {
  const renderLoader = () =>
    <div style={{ position: 'absolute', height: '100px', width: '100px', top: '50%', left: '50%', marginLeft: '-50px', marginTop: '-50px' }}>
      <img src={logo} id='breathing' width={100} height={100} className='img-fluid' alt="logo of Skill Shikhun" />
    </div>

  return (
    <AuthProvider>
      <Suspense fallback={renderLoader()}>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/shobar-jnno-freelancing" element={<Course color='#2c3493' name="সবার জন্য ফ্রিল্যান্সিং" />} />
          <Route path="/digital-marketing" element={<Course color='#2c3493' name="Digital Marketing" />} />
          <Route path="/video-editing" element={<Course color='#653dae' name="Video Editing" />} />
          <Route path="/web-development" element={<Course color='#13338b' name="Web Development" />} />
          <Route path="/graphics-design" element={<Course color='#df8254' name="Graphics Design" />} />

          {/* For SEO */}
          <Route path="/freelancing-course-in-bangladesh" element={<Course color='#2c3493' name="সবার জন্য ফ্রিল্যান্সিং" />} />
          <Route path="/best-digital-marketing-course-in-bangladesh" element={<Course color='#2c3493' name="Digital Marketing" />} />
          <Route path="/video-editing-course-in-bangladesh" element={<Course color='#653dae' name="Video Editing" />} />
          <Route path="/web-design-and-development-course-in-bangladesh" element={<Course color='#13338b' name="Web Development" />} />
          <Route path="/graphic-design-course-in-bangladesh" element={<Course color='#df8254' name="Graphics Design" />} />

          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login-checkout-selected-course" element={<LoginForCheckout />} />

          <Route path="/fail" element={<Fail />} />
          <Route path="/cancel" element={<Cancel />} />

          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/eftykharrahman" element={<User />} />

          <Route path="/" element={<PrivateOutlet />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard/live-course" element={<DLiveCourse />} />
            <Route path="dashboard/free-class" element={<DFreeClass />} />
            <Route path="dashboard/class-recordings" element={<DClassRecordings />} />
            <Route path="dashboard/previous/free-class/:courseId" element={<DPrevFreeClass />} />
            <Route path="dashboard/video-course" element={<DVideoCourse />} />
            <Route path="dashboard/payment-history" element={<DPaymentHistory />} />
            <Route path="dashboard/profile" element={<Profile />} />
            <Route path="/success" element={<Success />} />
            <Route path="/checkout/:courseId" element={<Checkout />} />
            <Route path="course/live/video/:courseId" element={<DLiveCourseVideo />} />
            <Route path="course/live/video/batch-2/:courseId" element={<DLiveCourseVideoB2 />} />
            <Route path="courses/:courseId" element={<VideoPlayer />} />
            {/* <Route path="/:username" element={<User />} /> */}

          </Route>

          <Route path="/" element={<PrivateOutlet2 />}>
            <Route path="/purchase/checkout/:courseId" element={<PurchaseCheckout />} />
          </Route>

          <Route path="/*" element={<NotFound />} />

        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
