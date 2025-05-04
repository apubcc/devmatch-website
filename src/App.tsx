
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import EventDetails from './components/sections/EventDetails';
import Tracks from './components/sections/Tracks';
import Prizes from './components/sections/Prizes';
import Sponsors from './components/sections/Sponsors';
import Judges from './components/sections/Judges';
import Schedule from './components/sections/Schedule';
import FAQ from './components/sections/FAQ';
import Community from './components/sections/Community';
import Footer from './components/layout/Footer';
import GlobeBackground from './components/ui/globe';
import StarryBackground from './components/ui/StarryBackground';

function App() {
  return (
    <div className=" bg-space-dark text-white overflow-hidden ">
      <GlobeBackground/>
      <StarryBackground/>
      <div className=" z-10 ">
        <Header />
        <main >
          <Hero />
          <About />
          <EventDetails />
          <Tracks />
          <Prizes />
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