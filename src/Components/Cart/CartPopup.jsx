import React from 'react'
import PopProduct from './PopProduct'
import './CardPop.css'

const CartPopup = ({ showProductArr, addtoCart }) => {
  const renderItem = showProductArr.map((product) => {
    return <PopProduct product={product} key={product.boxId} addtoCart={addtoCart} />
  })
  return (
    <div className='pCart-container flex-box' id='product-pop'>
      {renderItem}
    </div>
  )
}

export default CartPopup
