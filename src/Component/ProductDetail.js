import React from "react";
import BasicRating from "./BasicRating";
import { addCart, CartItems } from "../actions";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showToastMessage } from "../Notification/notify";

export default function ProductDetail({ item }) {
  const dispatchCart = useDispatch();
  const dispatchTotal = useDispatch();

  function handleClick(item) {
    if (!item.qty) {
      item.qty = 1;
    }
    dispatchCart(addCart(item));
    dispatchTotal(CartItems());
    showToastMessage("Item added to cart", "success");
  }

  return (
    <div className="container mt-4">
      <ToastContainer />
      <div className="row">
        <div className="col-md-6">
          {/* Image Carousel */}
          <div className="border border-1 rounded">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
              <div className="carousel-inner">
              {item.images.map((image, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img src={image} className="d-block w-100" alt="" />
              </div>
                ))}
          
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          {/* Product Details */}
          <div className="d-flex flex-column gap-3">
            <h2>{item.title}</h2>
            <BasicRating value={item.rating} />
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="text-danger">Price: </span>
                <span className="text-success">Rs {item.price}</span>
              </div>
              {item.discountPercentage && (
                <div>
                  <span className="text-danger">Discount: </span>
                  <span className="text-success">{item.discountPercentage}%</span>
                </div>
              )}
            </div>
            <div>
              <span className="text-danger">Category: </span>
              <span className="text-success">{item.category}</span>
            </div>
            <div>
              <span className="text-danger">Stocks: </span>
              <span className="text-success">{item.stock || "Out of Stock"}</span>
            </div>
            <p>{item.description}</p>
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: "100%", backgroundColor: "var(--nav)" }}
              onClick={() => handleClick(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
