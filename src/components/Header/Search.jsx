import React from 'react'

const Search = () => {
    return (
        <div className="search-box d-flex align-center justify-center">
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
        </div>
    )
}

export default Search