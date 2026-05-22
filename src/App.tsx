import Header from "./components/Header"
import { Hero } from "./sections/Hero"
import News from "./sections/News"
import MembershipBanner from "./sections/MembershipBanner"
import MatchCenter from "./sections/matchCenter"
import ShoppingItems from "./sections/shopping"
import Stadium from "./sections/infoStadium"
import Achievements from "./sections/Achievements"
import OurHistory from "./sections/ourHistory"
import Community from "./sections/community"
import Partners from "./sections/partners"
import Footer from "./components/footer"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <>
      <Header />
      <main className="bg-neutral-950 text-white flex flex-col items-center overflow-hidden">
        <Hero />
        <News />
        <MatchCenter />
        <ShoppingItems />
        <Stadium />
        <Achievements />
        <OurHistory />
        <MembershipBanner />
        <Community />
        <Partners />
      </main>
      <Footer />
    </>
  )
}

export default App
