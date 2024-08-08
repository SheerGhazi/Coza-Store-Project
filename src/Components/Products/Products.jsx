import React from 'react'

export default function Products({ product, showProduct }) {

  const handleMouseEnter = () => {
    let box = document.getElementById(product.boxId);
    box.classList.add("change");
  }

  const handleMouseLeave = () => {
    let box = document.getElementById(product.boxId);
    box.classList.remove("change");
  }

  const handleAdd = () => {
    showProduct(product.boxId);
    document.getElementById('product-pop').style.display = "flex"
  }
  return (
    <div className="product-box">
      <div id={product.boxId} className="image-box" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src={product.image} alt="" />
        <button id='quickView' onClick={handleAdd}>Quick View</button>
      </div>
      <div className="p-info">
        <a href="">{product.name}</a>
        <span className="material-symbols-outlined">favorite</span>
      </div>
      <p>{`$${product.price}`}</p>
    </div>
  )
}
