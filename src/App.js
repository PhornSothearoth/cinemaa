import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { initFlowbite } from 'flowbite';
import Home from './Home';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import { Outlet, Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import Contact from './page/Contact';
import About from './page/About';
import NotFound from './page/NotFound';
import PupolarMovies from './page/PupolarMovies';
import NowPlaying from './page/NowPlaying';
import TopRate from './page/TopRate';
import UpComing from './page/UpComing';
import Slider from './components/Slider';


function App() {
  useEffect(() => {
    initFlowbite()
  })
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
         <Route path='/' element={<Home />}/>
         <Route path='/login' element={<Login />}/>
         <Route path='/contact' element={<Contact />}/>
         <Route path='/about' element={<About />}/>
         <Route path='/pupolarmovies' element={<PupolarMovies/>}/>
         <Route path='/nowplaying' element={<NowPlaying/>}/>
         <Route path='/toprate' element={<TopRate/>}/>
         <Route path='/upcoming' element={<UpComing/>}/>
         <Route path='/slider' element={<Slider/>}/>
         <Route path='*' element={<NotFound />}/>
      </Route>
    </Routes>
  );
}

export default App;

// create main layout
function MainLayout(){
  return(
    <>
      <MyNav />
      <Outlet />
      <MyFooter />
    </>
  )
}
