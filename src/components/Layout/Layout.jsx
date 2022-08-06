import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Map from '../Map/Map'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className='d-flex justify-center'>
                <div className='container'>
                    <div className="d-flex g-20">
                        {children}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Layout