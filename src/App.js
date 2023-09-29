import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Intro from './Components/Intro/Intro';
import ImageGrid from './Components/Grid/Grid';
import Carousel from './Components/Carousel/Carousel';
import Team from './Components/Team/Team';
import Faq from './Components/FAQ/Faq';


function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Intro/>
    <ImageGrid/>
    <Carousel/>
    <Team />
    <Faq />
    </div>
  );
}

export default App;
