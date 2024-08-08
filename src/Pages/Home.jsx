import React from 'react'
import Catagory from '../Components/Catagory/Catagory'
import Footer from '../Components/Footer/Footer'
import Header2 from '../Components/Header/header2'
import ProductExport from '../Components/Products/ProductExport'
import '../App.css'
import SideCart from '../Components/Cart/SideCart'
import CartPopup from '../Components/Cart/CartPopup'

export default function Home({ productsInfo, showProduct, addProducts, addedProducts, showProductArr }) {



  return (
    <>
      <Header2 />
      <SideCart addedProductsArr={addedProducts} />
      <Catagory />
      <ProductExport productsArr={productsInfo} showProduct={showProduct} />
      <CartPopup productsArr={addedProducts} showProductArr={showProductArr} addtoCart={addProducts} />
      <Footer />
    </>
  )
}
