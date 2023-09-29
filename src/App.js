import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Intro from './Components/Intro/Intro';
import ImageGrid from './Components/Grid/Grid';
import Carousel from './Components/Carousel/Carousel';


function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Intro/>
    <ImageGrid/>
    <Carousel/>
    </div>
  );
}

export default App;
