import React, { useState } from 'react'

const PopProduct = ({ product, addtoCart }) => {
    const [noItems, setNoItems] = useState(product.noItems);

    const closeProductPop = () => {
        document.getElementById('product-pop').style.display = "none"
    }

    const handleChange = (event) => {
        setNoItems(event.target.value);
    }

    const handleAdd = () => {
        setNoItems(+noItems + 1);
    }

    const handleSub = () => {
        setNoItems(+noItems - 1);
        if (noItems <= 0) {
            setNoItems(0);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addtoCart(product.boxId, noItems);
    }

    function showCart() {
        document.getElementById('sideCart-box').style.right = "0%";
        closeProductPop();
    }


    return (
        <div className="pcart-inner">
            <span className="close-product material-symbols-outlined" onClick={closeProductPop}>close</span>
            <div className="pCart-image">
                <img src={product.image} alt="" />
            </div>
            <div className="product-data">
                <h4>{product.name}</h4>
                <h5>${product.price}</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corrupti, temporibus sed repudiandae placeat deserunt impedit. </p>
                <div className="upDown-product">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="add-box">
                            <button className='sub-btn' onClick={handleSub}>-</button>
                            <input type='number' value={noItems} name="" id="" onChange={handleChange} />
                            <button className='add-btn' onClick={handleAdd}>+</button>
                        </div>
                        <button className='addToCart' onClick={closeProductPop}>Add to Cart</button>
                        <button className='addToCart' style={{ marginLeft: '20px' }} onClick={showCart}>View Cart</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PopProduct
