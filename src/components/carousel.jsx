import './carousel.css'
import carousel1 from '../assets/images/carousel1.avif'
import carousel2 from '../assets/images/carousel2.avif'
export default function Carousel() {
    return (

        <>
            <div className="container-fluid">
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={carousel1} className="d-block w-100" alt="..." />
                            <div className="text">
                                <h2>Acheive the extraordinary</h2>
                                <p>Microsoft 365 delivers cloud storage, security and Microsoft Copilot in your favourite apps – all in one plan.</p>
                                <a href='#'>Shop Micrososft 365</a>
                            </div>
                        </div>
                        <div className="carousel-item" >
                            <img src={carousel2} className="d-block w-100" alt="..." />
                            <div className="text">
                                <h2>Copilot is your AI companion</h2>
                                <p>Always by your side, ready to support you whenever and wherever you need it.</p>
                                <a href='#'>Download the Copilot App</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="text-center mt-3">
                <button className="btn " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <i className="bi bi-chevron-left chevron"></i> </button>
                <button className="btn " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <i className="bi bi-chevron-right chevron"></i>
                </button>
            </div>
        </>
    )
}