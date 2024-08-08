import React from 'react'
import Footer from '../Components/Footer/Footer'
import WhiteHeader from '../Components/Header/WhiteHeader'
import ProductExport from '../Components/Products/ProductExport'
import SideCart from '../Components/Cart/SideCart'
import CartPopup from '../Components/Cart/CartPopup'

export default function ProductPage({ productsInfo, showProduct, addProducts, addedProducts, showProductArr }) {
  return (
    <>
      <WhiteHeader />
      <SideCart addedProductsArr={addedProducts} />
      <ProductExport productsArr={productsInfo} showProduct={showProduct} />
      <CartPopup productsArr={addedProducts} showProductArr={showProductArr} addtoCart={addProducts} />
      <Footer />
    </>
  )
}
