import React from 'react'

const SideCartProduct = ({ product }) => {
    return (
        <div className='sProd-box'>
            <div className="inner-spBox">
                <img src={product.image} alt="" />
                <div className="Cproduct-info">
                    <p>{product.name}</p>
                    <p>{product.noItems} x ${product.price}</p>
                </div>
            </div>
        </div>
    )
}

export default SideCartProduct
