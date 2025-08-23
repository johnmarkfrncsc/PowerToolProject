import React from "react";

const AddProductModal = () => {
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
              <input type="text" placeholder="Enter Title" className="input" />
              <input
                type="number"
                placeholder="Enter Price"
                className="input"
              />
              <input type="text" placeholder="Enter Brand" className="input" />
              <input
                type="text"
                placeholder="Enter Description"
                className="input"
              />
              <input
                type="text"
                placeholder="Enter Category"
                className="input"
              />
              <input
                type="text"
                placeholder="Enter Image URL"
                className="input"
              />
              <div className="modal-action">
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
