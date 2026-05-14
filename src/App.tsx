import Header from "./components/Header"
import { Hero } from "./pages/Hero"
import News from "./pages/News"
import Footer from "./components/footer"

function App() {
  return (
    <>
      <Header />
      <main className="bg-neutral-950 text-white flex flex-col items-center">
        <Hero />
        <News />
      </main>
      <Footer />
    </>
  )
}

export default App
