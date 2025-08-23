
import './App.css'
import Navbar from'/COMPONENTS/navbar.jsx'
import Carousel from '/COMPONENTS/carousel.jsx'
import Card from '/COMPONENTS/card.jsx'
import Image_container from '/COMPONENTS/image-overlay.jsx'
import Remaining_Cards from '/COMPONENTS/remaining-cards.jsx'
import Follow from '/COMPONENTS/follow.jsx'
import Footer from '/COMPONENTS/footer.jsx'
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
