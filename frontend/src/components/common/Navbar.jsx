import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-white text-black flex gap-10 justify-between">
        <div className="flex bg-white shadow-none border-none text-xl font-bold p-0 ">
          <a className=" text-base-100">
            TORQUE<span className="text-orange-500">PRO.</span>
          </a>
        </div>

        <div className="drawer md:drawer-toggle size-10">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center size-10">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-white text-orange-500 text-lg  border-y-4 border-r-4 min-h-full w-50 p-4 ">
              {/* Sidebar content here */}
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Product</Link>
              </li>
              <li>
                <Link to="">About</Link>
              </li>
              <li>
                <Link to="">Contact</Link>
              </li>
              <li>
                <Link to="/add">Add Product</Link>
              </li>
              <li>
                <Link to="/products">Shop Now</Link>
              </li>
            </ul>
          </div>
        </div>

        <ul className="hidden  md:flex flex-col md:flex-row gap-10 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Product</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link to="">Contact</Link>
          </li>
          <li>
            <Link to="/add">Add Product</Link>
          </li>
        </ul>

        <button className="btn bg-amber-600 border-0 shadow-none rounded-3xl hidden md:block">
          <Link to="/products">Shop Now</Link>
        </button>
      </div>
    </>
  );
};

export default Navbar;
