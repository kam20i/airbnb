import React from 'react'

const Search = () => {
    return (
        <>  
            <div className="active-search-box d-flex justify-between">
                <div className="where-box">
                    <p>Where</p>
                    <input type="text" />
                </div>
                <div className="check-in-box">
                    <p>Check in</p>
                    <span>Add dates</span>
                </div>
                <div className="check-out-box">
                    <p>Check in</p>
                    <span>Add dates</span>
                </div>
                <div className="who-box">
                    <p>Who</p>
                    <span>Add guests</span>
                </div>
            </div>
            {/* <div className="search-box d-flex align-center justify-center">
                <div className='buttons-box d-flex justify-center'>
                    <button>Anywhere</button>
                    <span>|</span>
                    <button>Any week</button>
                    <span>|</span>
                    <button>Add guests</button>
                </div>
                <button className='search-btn'>
                    <i className='fa fa-search'></i>
                </button>
            </div> */}
        </>
    )
}

export default Search