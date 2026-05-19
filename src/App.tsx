import Header from "./components/Header"
import { Hero } from "./pages/Hero"
import News from "./pages/News"
import MembershipBanner from "./pages/MembershipBanner"
import MatchCenter from "./pages/matchCenter"
import ShoppingItems from "./pages/shopping"
import Partners from "./pages/partners"
import Footer from "./components/footer"

function App() {
  return (
    <>
      <Header />
      <main className="bg-neutral-950 text-white flex flex-col items-center overflow-hidden">
        <Hero />
        <News />
        <MatchCenter />
        <ShoppingItems />
        <MembershipBanner />
        <Partners />
      </main>
      <Footer />
    </>
  )
}

export default App
