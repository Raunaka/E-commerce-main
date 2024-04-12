import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  const total = useSelector((state) => state.totalCart);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3">
          E-commerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/addproducts" className="nav-link">
                Add a Product
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <Link to="/cart" className="text-white me-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png"
                alt="Shopping Cart"
                width="40"
                style={{ cursor: "pointer" }}
              />
              {total > 0 && (
                <span className="badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle">
                  {total}
                </span>
              )}
            </Link>
            <img
              src="https://cdn-icons-png.flaticon.com/512/236/236832.png"
              alt="User Profile"
              width="40"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
