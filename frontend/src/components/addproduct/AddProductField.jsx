import React, { use, useEffect, useState } from "react";
import axios from "axios";

const AddProductField = () => {
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

          <div>
            <div className="flex flex-col gap-4">
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

              <select
                className="h-10 border-2 **:text-black"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              >
                <option value="">Select brand</option>
                <option value="toyohama">Toyohama</option>
                <option value="dewalt">DE WALT</option>
                <option value="bosch">BOSCH</option>
              </select>

              <select
                className="h-10 border-2 **:text-black"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select category</option>
                <option value="drills & drivers">Drills & Drivers</option>
                <option value="Saw & Blades">Saw & Blades</option>
                <option value="Hand Tools">Hand Tools</option>
              </select>

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
              <div>
                <form onSubmit={handleSubmit}>
                  <button className="btn">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProductField;
