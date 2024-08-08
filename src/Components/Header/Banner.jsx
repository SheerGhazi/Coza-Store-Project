import React from 'react'
import { NavLink } from "react-router-dom";

export default function Banner() {
  return (
    <div className="banner-container max-box">
        <div className="banner-box">
            <h5>Women Collection 2023</h5>
            <h2>NEW SEASON</h2>
            <NavLink to="/pages/ShopPage"><button className="primary">New Arrival Soon</button></NavLink>
        </div>
    </div>
  )
}
