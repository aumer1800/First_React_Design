import card5 from '../assets/images/card5.avif'
import card6 from '../assets/images/card6.avif'
import card7 from '../assets/images/card7.avif'
import card8 from '../assets/images/card8.avif'


export default function Remaining_Cards() {
    return (
        <>
            <div className="container">
                <div className="row card-container">
                    <div className="col-lg-3 col-md-6 card-fill">
                        <div className="card " >
                            <img src={card5} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Microsoft 365 Copilot</h5>
                                <p className="card-text">Save time and focus on the things that matter most with AI in Microsoft 365 for business.</p>
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 card-fill">

                        <div className="card">
                            <img src={card6} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Welcome to your Windows 365 Cloud PC</h5>
                                <p className="card-text">Securely stream your Windows experience from the Microsoft cloud to any device.</p>
                                <a href="#" className="btn btn-primary">Get it Today</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 card-fill">

                        <div className="card" >
                            <img src={card7} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Visual Studio 2022</h5>
                                <p className="card-text">Get the most comprehensive IDE for .NET and C++ developers on Windows for building web, cloud, desktop, mobile apps, services and games.</p>
                                <a href="#" className="btn btn-primary">Download Visual Studio 2022</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 card-fill">
                        <div className="card" >
                            <img src={card8} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Get Microsoft Teams for your business</h5>
                                <p className="card-text">Online meetings, chat, real-time collaboration, and shared cloud storage – all in one place.</p>
                                <a href="#" className="btn btn-primary">Find the right plan for your bussiness</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}