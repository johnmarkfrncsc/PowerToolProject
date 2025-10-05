import React from "react";

const Footer = () => {
  return (
    <>
      <footer className=" w-full footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-2 md:hidden">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by{" "}
            <span className="font-bold">TORQUEPRO</span>.
          </p>
        </aside>
      </footer>

      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-4 hidden md:flex justify-evenly">
        <aside>
          <p className="w-64">
            <span className="font-bold textarea-md">TORQUEPRO.</span>
            <br />
            Leading the industry with innovative, high-performance power tools
            for every trade and craft.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">Products</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
