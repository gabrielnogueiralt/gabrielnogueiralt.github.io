import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Academic } from './components/Academic'
import { Education } from './components/Education'
import { Interests } from './components/Interests'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Academic />
        <Education />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
