
import './image-overlay.css'
import lgimge from '../assets/images/lgimage.avif'
export default function Image_container(){
return (
    <>
    <div className="container-fluid">
        <img src={lgimge} alt="" />
        <div className="inside-image">
         <h3>Organise your life</h3>
         <p>Keep your ideas and notes organised with OneNote.</p>
         <a href='#'>Learn More</a>
        </div>
    </div>
    </>
)
}