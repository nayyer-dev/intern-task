import logo from './logo.svg';
import './App.css';
import { Router } from 'react-router-dom';
import Navbar from './component/navbar/navbar';
import Hero from './component/hero/hero';
import Story from './component/our-story/story';
import Features from './component/features/features';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Story />
      <Features />
    </div>
  );
}

export default App;
