import React from 'react'

const AddToCart = ({addToCartItem}) => {
  return (
    <div className='add-to-cart-wrapper'>
      <div className="add-to-cart-item">
        <img src={addToCartItem} alt="" />
        <h6>Item name</h6>
      </div>
    </div>
  )
}

export default AddToCart