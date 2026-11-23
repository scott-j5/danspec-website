import { Capabilities } from './components/Capabilities'
import { Compliance } from './components/Compliance'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Method } from './components/Method'
import { Projects } from './components/Projects'
import { Region } from './components/Region'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Compliance />
        <Capabilities />
        <Projects />
        <Method />
        <Region />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
