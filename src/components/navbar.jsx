
import './navbar.css'
import logo from '../assets/images/logo.png'


export default function Navbar() {
    return (
        <>
            <div className="container navbar-container">
                <nav className="navbar navbar-expand-lg ">
                        <img className='logo' src={logo} />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Microsoft365</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Office</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Copilot</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Windows</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Support</a>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        All Microsoft
                                    </a>
                                </li>
                                <li ><a href='#'><i class="bi bi-search"></i></a></li>
                                <li ><a href='#'><i class="bi bi-cart3"></i></a></li>
                                <li ><a href='#'><i class="bi bi-person"></i></a> </li>
                            </form>
                        </div>
                </nav>
            </div>
        </>
    )
}