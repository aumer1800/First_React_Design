
import './App.css'
import Navbar from './components/navbar'
import Carousel from './components/carousel'
import Card from './components/card'
import Image_container from './components/image-overlay'
import Remaining_Cards from './components/remaining-cards'
import Follow from './components/follow'
import Footer from './components/footer'
function App() {
  return (
    <>
      <Navbar/>
      <Carousel/>
      <Card/>
      <Image_container/>
      <Remaining_Cards/>
      <Follow/>
      <Footer/>
    </>
  )
}

export default App
