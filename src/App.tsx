import { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import EventDetails from './components/sections/EventDetails';
import Tracks from './components/sections/Tracks';
import Sponsors from './components/sections/Sponsors';
import Judges from './components/sections/Judges';
import Schedule from './components/sections/Schedule';
import FAQ from './components/sections/FAQ';
import Community from './components/sections/Community';
import Footer from './components/layout/Footer';
import GlobeBackground from './components/ui/globe';
import StarryBackground from './components/ui/StarryBackground';
import VirtualPet from './components/ui/pet';
import IntroPage from './components/IntroPage';




function App() {
  const [showIntro, setShowIntro] = useState(true);

  return showIntro ? (
    <IntroPage onFinish={() => setShowIntro(false)} />
  ) : (
    <div className=" bg-space-dark text-white overflow-hidden ">
      <GlobeBackground/>
      <StarryBackground/>
      <VirtualPet />
      <div className=" z-10 ">
        <Header />
        <main >
          <Hero />
          <About />
          <EventDetails />
          <Tracks />
          <Sponsors />
          <Judges />
          <Schedule />
          <FAQ />
          <Community />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;