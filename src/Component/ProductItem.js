import React, { useState } from "react";
import { useDispatch } from "react-redux";
import BasicRating from "./BasicRating";
import { ProductToview } from "../actions";
import { useNavigate } from "react-router-dom";
import { addCart, CartItems } from "../actions";
import { ToastContainer } from "react-toastify";
import { showToastMessage } from "../Notification/notify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductItem({ item }) {
  const [addedItem, setAddedItem] = useState(true);
  const dispatchCart = useDispatch();
  const dispatchTotal = useDispatch();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick(item) {
    dispatch(ProductToview(item));
    navigate(`/productdetails/${item.id}`);
  }

  function handleCart(item) {
    if (addedItem) {
      item.qty = 1;
      dispatchCart(addCart(item));
      dispatchTotal(CartItems());
      setAddedItem(false);
      showToastMessage("Item Added to cart", "success");
    } else {
      navigate("/cart");
    }
  }

  return (
    <div className="d-flex container-sm bg-white px-1 py-5 mt-4 flex-column flex-lg-row gap-3">
      <ToastContainer />
      {/* Left section */}
      <div className="d-flex container-sm gap-5">
        <img
          src={item.thumbnail}
          alt=""
          width={"200rem"}
          onClick={() => handleClick(item)}
        />
        {/* Right-part Content */}
        <div className="d-flex flex-column gap-2">
          <h5>{item.title}</h5>
          <BasicRating value={item.rating} />
          <div className="d-flex gap-3 ">
            <span className="text-success">
              <span className="text-danger">Price:</span> Rs {item.price}
            </span>
          </div>
          <p className="text-danger">Description: {item.description}</p>
        </div>
      </div>
      {/* Right section */}
      <div className="p-2">
        {/* Description field */}
      </div>
      {/* Footer section */}
      <div className="align-self-end d-flex align-items-center gap-4 flex-lg-grow-1 p-1">
        <button
          type="button"
          className="btn btn-primary"
          style={{
            width: "9rem",
            backgroundColor: "var(--nav)",
          }}
          onClick={() => handleCart(item)}
        >
          {addedItem ? "Add to Cart" : "Go to Cart"}
        </button>
      </div>
    </div>
  );
}
