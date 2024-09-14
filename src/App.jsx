import './App.scss'
import Below from './components/Below/Below'
import Feedback from './components/Feedback/Feedback'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'


function App() {
  return (
    <div className="app-container">
      <HeroSection/>
      <div className='big-screen'>
        <Feedback/>
        <Below/> 
      </div>
      <Footer/>
    </div>
  )
}

export default App
