import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Assuming you are using React Router for navigation

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill in both email and password fields.");
      return;
    }
    navigate("/pages/Dashboard");

    // Proceed with login logic here
    // Example: You can send a request to your backend for authentication
    console.log("Logging in with:", email, password);
  };

  return (
    <div>
      <div className="container mx-auto mt-5 flex items-center justify-center">
        <div className="right flex flex-col bg-white p-6 rounded-lg w-1/2 relative md:w-1/3">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Admin Details
          </h1>
          <input
            className="px-6 h-12 my-2 border border-1 border-gray-400 rounded-md 0-blue-500"
            type="text"
            placeholder="Email address or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="px-6 h-12 my-2 border border-1 border-gray-400 rounded-md outline-blue-500"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="btn bg-[#0866ff] text-white hover:bg-blue-500 p-3 rounded-lg my-2 text-xl font-bold"
            onClick={handleLogin}
          >
            Log In
          </button>
          <span className="text-blue-700 text-center my-3 cursor-pointer hover:underline">
            <a className="text-blue-600" href="#">
              Forgotten Password
            </a>
          </span>
          <hr className="my-4" />
          <button className="btn2 bg-[#42b72a] text-white hover:bg-[#42a32f] py-3 px-3 mx-auto rounded-lg my-2 text-xl font-bold w-fit">
            <NavLink to="/pages/AdminPage">Create new account</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
