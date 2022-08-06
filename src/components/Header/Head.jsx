import React from 'react'
import './Header.css'

import logo from '../../assets/logo.png'
import Search from './Search'

const Head = () => {
    return (
        <div className='head d-flex justify-center'>
            <div className="container d-flex justify-between align-center">
                <div className="logo d-flex">
                    <img src={logo} alt="" />
                    <h3>airbnb</h3>
                </div>
                <Search/>
                <div className="controllers d-flex justify-center align-center">
                    <div className="host">
                        <button>Become a Host</button>
                    </div>
                    <div className="languages">
                        <button className="circle-icon">
                            <i className='fa fa-globe'></i>
                        </button>
                    </div>
                    <div className="user-account d-flex justify-center align-center">
                        <button className='bar-btn'>
                            <i className="fa fa-bars"></i>
                        </button>
                        <button className='user-btn'>
                            <i className="fa fa-user"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Head