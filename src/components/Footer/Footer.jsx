import React, {useState} from 'react'
import './Footer.css'
import { Link } from "react-router-dom";


const Footer = () => {
    const [to, SetTo] = useState(false)
    return (
        <footer className='d-flex justify-center align-end'>
            <div className="container">
                <div className='d-flex justify-center'>
                    <button className='map-button'>
                        <Link to={to === false ? '/' : '/map'} onClick={() => SetTo(!to)}>
                            {to === false ? 'Show Posts' : 'Show Map'}
                        </Link>
                        <i className="fa-solid fa-map map-icon"></i>
                    </button>
                </div>
            </div>
                <ul className='footer-list d-flex justify-center align-center'>
                    <div className="container">
                        <li className='footer-list-item'><Link to=''>Privacy</Link></li>
                        <li className='footer-list-item'><Link to=''>Terms</Link></li>
                        <li className='footer-list-item'><Link to=''>Sitemap</Link></li>
                        <li className='footer-list-item'><Link to=''>Destinations</Link></li>
                    </div>
                </ul>
        </footer>
    )
}

export default Footer