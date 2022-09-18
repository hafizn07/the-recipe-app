import React, { useContext } from 'react'
import { StateContext } from '../context/AppProvider'

const AddToCart = ({addToCartItem}) => {

  const cartPackage = useContext(StateContext)

  let cartItemsAre = cartPackage.cartItems.map((items)=>{
    return(
      <div>
      <img src={items.img} alt="" />
      <h6>{items.title}</h6>
      </div>
    )
  })

  // let addToCartResults = addToCartItem.map((item)=>{
  //   return(
  //     <div>
  //       <img src={item.img} alt="" />
  //       <h6>{item.title}</h6>
  //     </div>
  //   )
  // })

  return (
    <div className='add-to-cart-wrapper'>
      <div className="add-to-cart-item">
        <h6 className="text-center">Your Cart</h6>
        {cartItemsAre}
      </div>
    </div>
  )
}

export default AddToCart