import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-white text-black flex gap-10 justify-between">
        <div className="flex bg-white shadow-none border-none text-xl font-bold p-0 ">
          <a className=" text-base-100">
            TORQUE<span className="text-orange-400">PRO</span>
          </a>
        </div>

        <div className="drawer md:drawer-open md:drawer-toggle size-10">
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
            <ul className="menu bg-base-200 text-base-content min-h-full w-50 p-4">
              {/* Sidebar content here */}
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Product</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Shop Now</a>
              </li>
            </ul>
          </div>
        </div>

        <ul className="hidden md:flex flex-col md:flex-row md:pl-20 gap-10 ">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Product</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>

        <button className="btn bg-amber-600 border-0 shadow-none rounded-3xl hidden md:block">
          Shop Now
        </button>
      </div>
    </>
  );
};

export default Navbar;
