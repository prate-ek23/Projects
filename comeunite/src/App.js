import { Carousel } from 'react-responsive-carousel';
import './App.css';
import NavBar from './components/AppNav';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Team from './components/Team';
import Community from './components/Community';
import Volunteers from './components/Volunteers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="events" element={<Content />} />
        <Route path="team" element={<Team />} />
        <Route path="community" element={<Community />} />
        <Route path="volunteers" element={<Volunteers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <Carousel
  centerMode={true}
  centerSlidePercentage={20}
  showThumbs={true}
  infiniteLoop={true}
  autoPlay={true}
  useKeyboardArrows={true}
  width={30}
>
  <div styele={'width: auto'}>
    <img
      // src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
      // src="https://source.unsplash.com/1531297484001-80022131f5a1/300X300"
      src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=80&h=80&fit=crop"
      alt="hi there"
    />
    <p>IMAGE</p>
  </div>
  <div>
    <img
      src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=80&h=80&fit=crop
"
      alt="hi there"
    />
    <p>IMAGE</p>
  </div>
  <div>
    <img
      src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=80&h=80&fit=crop
"
      alt="hi there"
    />
    <p>IMAGE</p>
  </div>
</Carousel>; */
}
