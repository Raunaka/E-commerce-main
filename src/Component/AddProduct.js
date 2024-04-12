import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addproducts } from "../actions";
import customFetch from "../apiCall";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showToastMessage } from "../Notification/notify"
import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  margin: auto;
  @media only screen and (max-width: 976px) {
    width: 90%;
  }
  @media only screen and (max-width: 576px) {
    width: 100%;
    margin: 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
`;

const Button = styled.button`
  align-self: end;
  width: 9rem;
  background-color: var(--nav);
`;

export default function AddProduct() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [rating, setRating] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let result = customFetch("https://my-json-server.typicode.com/jaiswalaryan/data/products", {
      body: {
        id: Date.now(),
        title: name,
        price,
        category,
        thumbnail,
        rating,
        description,
        edit: true,
      },
      method: "POST",
    });
    result.then((data) => {
      dispatch(addproducts([data, ...products]));
      navigate("/");
    });
    showToastMessage("Product Added Successful", "success");
    resetForm();
  }

  function resetForm() {
    setName("");
    setDescription("");
    setPrice("");
    setCategory("");
    setThumbnail("");
    setRating("");
  }

  return (
    <Container className="bg-light border border-1 border-dark mt-4 p-3">
      <ToastContainer />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Thumbnail image Url"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Ratings"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <Button type="submit" className="btn btn-primary">
          Add Product
        </Button>
      </Form>
    </Container>
  );
}
