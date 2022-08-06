import React from 'react'
import { useState } from 'react'
import './Filter.css'
import sliderConfigLogo from '../../assets/icons/sliders-horizontal.svg'

const Filter = () => {
  const [dialogStatus, SetDialogStatus]  = useState(false)
  const ShowDialog = ()=> {
    SetDialogStatus(!dialogStatus)
  }
  return (
    <>
      <button className='filter d-flex justify-center align-center' onClick={ShowDialog}>
        <img className='filter-icon' src={sliderConfigLogo} alt="" />
        <span>Filter</span>
      </button>
      { dialogStatus === true ? <div className='filter-modal d-flex justify-center align-center'>
        <div className="modal">
          <div className="d-flex justify-between align-center modal-header">
            <button onClick={ShowDialog}>
              <i class="fa-regular fa-circle-xmark"></i>
            </button>
            <h3>Filter</h3>
          </div>
        </div>
      </div> : null}
    </>

  )
}

export default Filter