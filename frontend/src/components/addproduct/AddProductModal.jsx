import React, { use, useEffect, useState } from "react";
import axios from "axios";

const AddProductModal = () => {
  // const [field, setField] = useState([]);

  // useEffect(() => {
  //   const handleSubmit = async () => {
  //     try {
  //       const response = await axios.post(`http://localhost:3000/items`);
  //       setField(response.data.data);
  //     } catch (error) {
  //       console.error("error".error);
  //     }
  //   };
  //   handleSubmit();
  // }, []);

  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async () => {
    const field = {
      item: item,
      price: price,
      brand: brand,
      category: category,
      description: description,
      image: image,
    };

    try {
      const response = await axios.post(`http://localhost:3000/items`, field);
      handleSubmit(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error("error".error);
    }
  };

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            open modal
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h1 className="pb-4">Add New Product</h1>
              <input
                type="text"
                placeholder="Enter Item"
                className="input"
                value={item}
                onChange={(e) => setItem(e.target.value)}
              />
              <input
                type="number"
                placeholder="Enter Price"
                className="input"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Brand"
                className="input"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Category"
                className="input"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Description"
                className="input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Image URL"
                className="input"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <div className="modal-action">
                <form onSubmit={handleSubmit}>
                  <button className="btn">Submit</button>
                </form>
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
};

export default AddProductModal;
