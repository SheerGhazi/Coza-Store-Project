import React, { useState } from 'react'
import Products from './Products'

export default function Productsexport({ productsArr, showProduct }) {

  const [productsInfo, setProductsInfo] = useState(productsArr);

  const [type1, setType1] = useState('black');
  const [type2, setType2] = useState('transparent');
  const [type3, setType3] = useState('transparent');
  const [type4, setType4] = useState('transparent');
  const [type5, setType5] = useState('transparent');


  const [products, setProducts] = useState(productsInfo);
  const [productType, setProductType] = useState('all');
  const [womenProd, setWomenProds] = useState([]);
  const [menProd, setMenProds] = useState([]);
  const [shoesProd, setShoesProd] = useState([]);
  const [watchProd, setWatchProd] = useState([]);

  const handleAll = () => {
    setProductType('all');
    setType1('black')
    setType2('transparent');
    setType3('transparent');
    setType4('transparent');
    setType5('transparent');
  }
  const handleWomen = () => {
    const updatedArr = products.filter((product) => {
      return product.type === 'women';
    })
    setWomenProds(updatedArr);
    setProductType('women');
    setType2('black')
    setType1('transparent');
    setType3('transparent');
    setType4('transparent');
    setType5('transparent');
  }
  const handleMen = () => {
    const updatedArr = products.filter((product) => {
      return product.type === 'men';
    })
    setMenProds(updatedArr);
    setProductType('men');
    setType3('black')
    setType1('transparent');
    setType2('transparent');
    setType4('transparent');
    setType5('transparent');
  }

  const handleShoes = () => {
    const updatedArr = products.filter((product) => {
      return product.type === 'shoes';
    })
    setShoesProd(updatedArr);
    setProductType('shoes');
    setType4('black')
    setType1('transparent');
    setType3('transparent');
    setType2('transparent');
    setType5('transparent');
  }

  const handleWatches = () => {
    const updatedArr = products.filter((product) => {
      return product.type === 'watch';
    })
    setWatchProd(updatedArr);
    setProductType('watch');
    setType5('black')
    setType1('transparent');
    setType3('transparent');
    setType4('transparent');
    setType2('transparent');
  }

  let renderedProducts;
  if (productType === 'all') {
    renderedProducts = products.map((product) => {
      return <Products product={product} key={product.boxId} showProduct={showProduct} />
    })
  }
  else if (productType === 'women') {
    renderedProducts = womenProd.map((product) => {
      return <Products product={product} key={product.boxId} showProduct={showProduct} />
    })
  }
  else if (productType === 'men') {
    renderedProducts = menProd.map((product) => {
      return <Products product={product} key={product.boxId} showProduct={showProduct} />
    })
  }
  else if (productType === 'shoes') {
    renderedProducts = shoesProd.map((product) => {
      return <Products product={product} key={product.boxId} showProduct={showProduct} />
    })
  }
  else if (productType === 'watch') {
    renderedProducts = watchProd.map((product) => {
      return <Products product={product} key={product.boxId} showProduct={showProduct} />
    })
  }

  return (
    <>
      <section className="product-info">
        <div className="product-container">
          <div className="productsinfo">
            <h1>PRODUCTS INFO</h1>
            <div className="products-type">
              <ul>
                <li style={{ borderBottom: `1px solid ${type1}` }} onClick={handleAll}>All Products</li>
                <li style={{ borderBottom: `1px solid ${type2}` }} onClick={handleWomen}>Women</li>
                <li style={{ borderBottom: `1px solid ${type3}` }} onClick={handleMen}>Men</li>
                <li style={{ borderBottom: `1px solid ${type4}` }} onClick={handleShoes}>Shoes</li>
                <li style={{ borderBottom: `1px solid ${type5}` }} onClick={handleWatches}>Watches</li>
              </ul>
            </div>
          </div>
          <div className="products-box">
            {renderedProducts}
          </div>
          <div className="load-btn-box flex-box">
            <button className="loadProduct">LOAD MORE</button>
          </div>
        </div>
      </section>
    </>
  )
}
