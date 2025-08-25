import './card.css'
import card1 from '../assets/images/card1.avif'
import card2 from '../assets/images/card2.avif'
import card3 from '../assets/images/card3.avif'
import card4 from '../assets/images/card4.avif'
export default function Card() {
    return (
        <>
            <div className="container">
                <div className="row card-container">
                    <div className="col-lg-3 col-md-6 card-fill">
                        <div className="card " >
                            <img src={card1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Microsoft Edge</h5>
                                <p className="card-text">World-class performance with more privacy, more productivity and more value while you browse.</p>
                                <a href="#" className="btn btn-primary">Download Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6  card-fill">

                        <div className="card">
                            <img src={card2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Bring the world closer with Bing Wallpaper</h5>
                                <p className="card-text">Download the free app and enjoy breathtaking views with a new background each day.</p>
                                <a href="#" className="btn btn-primary">Get Bring Wallpaper</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6  card-fill">

                        <div className="card" >
                            <img src={card3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Designed for life today – and tomorrow</h5>
                                <p className="card-text">The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love.</p>
                                <a href="#" className="btn btn-primary">See if your PC is ready</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6  card-fill">

                        <div className="card" >
                            <img src={card4} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Microsoft OneDrive</h5>
                                <p className="card-text">Save your files and photos to OneDrive and access them from any device, anywhere.</p>
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}