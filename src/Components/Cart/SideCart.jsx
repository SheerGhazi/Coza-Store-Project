import './SideCart.css'
import SideCartProduct from './SideCartProduct'
import { NavLink } from "react-router-dom";

const SideCart = ({ addedProductsArr }) => {

    const hideCart = () => {
        document.getElementById('sideCart-box').style.right = "-50%";
    }
    let testPrice = 0;
    const renderedProducts = addedProductsArr.map((product) => {
        testPrice = testPrice + product.price * product.noItems;
        return <SideCartProduct product={product} key={product.boxId} />
    })
    return (
        <div className='cart-container' id='sideCart-box'>
            <div className="cart-box">
                <div className="cart-top">
                    <div className="head-row">
                        <h3>Your Cart</h3>
                        <span className="material-symbols-outlined" onClick={hideCart}>close</span>
                    </div>
                    <div className="added-products-container">
                        {renderedProducts}
                    </div>
                </div>
                <div className="cart-buttons">
                    <div className="total-price">
                        <p>{testPrice.toFixed(2)}$</p>
                    </div>
                    <div className="sCart-btn">
                        <button>View Cart</button>
                        <button>
                    <NavLink 
                        to={{
                            pathname: "/pages/CheckoutPage",
                            state: { totalPrice: testPrice }
                        }}
                    >
                        Check Out
                    </NavLink>
                </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideCart
