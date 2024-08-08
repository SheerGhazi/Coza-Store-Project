import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as productImages from "./Components/Products/Media";

import Home from "./Pages/Home";
import ProductPage from "./Pages/Product";
import About from "./Pages/About";
import { useEffect, useState } from "react";
import AdminPage from "./Pages/AdminPage";
import LoginPage from "./Pages/LoginPage";
import ContactPage from "./Pages/ContactPage";
import Dashboard from "./Pages/Dashboard";
import CheckoutPage from "./Pages/CheckoutPage";
import ShopPage from "./Pages/ShopPage";
import { useSelector } from "react-redux";

function App() {
  const productsInfo = [
    {
      name: "Esprit Ruffle Shirt",
      price: 16.64,
      image: productImages.product_1,
      boxId: "box1",
      type: "women",
      status: "notAdded",
      noItems: 0,
    },
    {
      name: "White Dress Shirt",
      price: 35.31,
      image: productImages.product_2,
      boxId: "box2",
      type: "women",
      status: "notAdded",
      noItems: 0,
    },
    {
      name: "Polo Ralph Shirt",
      price: 25.5,
      image: productImages.product_3,
      boxId: "box3",
      type: "men",
      status: "notAdded",
      noItems: 0,
    },
    {
      name: "Classic Trench Coat",
      price: 75.0,
      image: productImages.product_4,
      boxId: "box4",
      type: "women",
      status: "notAdded",
      noItems: 0,
    },
    {
      name: "Front Pocket Jumper",
      price: 34.75,
      image: productImages.product_5,
      boxId: "box5",
      type: "women",
      status: "notAdded",
      noItems: 0,
    },
    {
      name: "CHPO Nando Watch",
      price: 34.75,
      image: productImages.product_6,
      boxId: "box6",
      type: "watch",
      status: "notAdded",
      noItems: 0,
    },
    {
      name: "Shirt in Stretch Cotton",
      price: 52.66,
      image: productImages.product_7,
      boxId: "box7",
      type: "women",
      status: "notAdded",
      noItems: 0,
    },
    {
      name: "Cactus T-Shirt",
      price: 18.96,
      image: productImages.product_8,
      boxId: "box8",
      type: "women",
      status: "notAdded",
      noItems: 0,
    },
    {
      name: "Converse Chuk Sneaker",
      price: 75.0,
      image: productImages.product_9,
      boxId: "box9",
      type: "shoes",
      status: "notAdded",
      noItems: 0,
    },
    {
      name: "Femme T-Shirt In Stripe",
      price: 25.85,
      image: productImages.product_10,
      boxId: "box10",
      type: "women",
      status: "notAdded",
      noItems: 0,
    },
    {
      name: "Mizzen Hampton Shirt",
      price: 63.16,
      image: productImages.product_11,
      boxId: "box11",
      type: "men",
      status: "notAdded",
      noItems: 0,
    },
    {
      name: "Leather Belt",
      price: 18.96,
      image: productImages.product_12,
      boxId: "box12",
      type: "men",
      status: "notAdded",
      noItems: 0,
    },
    {
      name: "White T-Shirt",
      price: 18.49,
      image: productImages.product_13,
      boxId: "box13",
      type: "women",
      status: "notAdded",
      noItems: 0,
    },
    {
      name: "Kids Bestag",
      price: 54.79,
      image: productImages.product_14,
      boxId: "box14",
      type: "women",
      status: "notAdded",
      noItems: 0,
    },
    {
      name: "Mini Silver Mesh Watch",
      price: 86.85,
      image: productImages.product_15,
      boxId: "box15",
      type: "watch",
      status: "notAdded",
      noItems: 0,
    },
    {
      name: "Black T-Shirt",
      price: 29.64,
      image: productImages.product_16,
      boxId: "box16",
      type: "women",
      status: "notAdded",
      noItems: 0,
    },
  ];

  const [addedProds, setAddedProds] = useState(productsInfo);
  const [addedProducts, setAddedProducts] = useState([]);
  const [showProd, setShowProd] = useState([]);

  const addProductsArr = () => {
    const addedProducts = addedProds.filter((product) => {
      return product.status === "added";
    });
    setAddedProducts(addedProducts);
  };
  const handleAddedProds = (id, noProds) => {
    let addedArray = addedProds.map((products) => {
      if (products.boxId === id) {
        return { ...products, status: "added", noItems: noProds };
      }
      return products;
    });
    setAddedProds(addedArray);
    addProductsArr();
  };

  const handleShowProd = (id) => {
    const clikedProduct = addedProds.filter((product) => {
      return product.boxId === id;
    });
    setShowProd(clikedProduct);
  };
  // console.log(addedProds)
  useEffect(() => {
    addProductsArr();
  }, [addedProds]);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                productsInfo={productsInfo}
                addProducts={handleAddedProds}
                addedProducts={addedProducts}
                showProduct={handleShowProd}
                showProductArr={showProd}
              />
            }
          />
          <Route
            path="/pages/ProductPage"
            element={
              <ProductPage
                productsInfo={productsInfo}
                addProducts={handleAddedProds}
                addedProducts={addedProducts}
                showProduct={handleShowProd}
                showProductArr={showProd}
              />
            }
          />
          <Route path="/pages/About" element={<About />} />

          <Route path="/pages/AdminPage" element={<AdminPage />} />

          <Route path="/pages/Loginpage" element={<LoginPage />} />

          <Route path="/pages/ContactPage" element={<ContactPage />} />

          <Route path="/pages/Dashboard" element={<Dashboard />} />

          <Route path="/pages/CheckoutPage" element={<CheckoutPage />} />

          <Route path="/pages/ShopPage" element={<ShopPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
