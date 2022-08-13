import React from 'react'

function Popup({closePopup}) { //props destructuring

  return (
    <div className='popup'>
        <div className="popup-content">
            <h2>Menu description will show here</h2>
            <button>Order now</button>
            <h5 className='popup-close' onClick={closePopup}>Close</h5>
        </div>
    </div>
  )
}

export default Popup