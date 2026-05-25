import Background from './components/Background'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <>
      <Background />
      <Navigation />
      <Hero />
      <div className="section-blur-wrap">
        <Projects />
        <Stack />
        <Contact />
      </div>
      <BackToTop />
    </>
  )
}
