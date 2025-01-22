"use client";
import React, { useState } from "react";
import "./Nav.css";
import Link from "next/link";
const Nav = () => {
  return (
    <body>
      <nav>
        {/* <!-- Left Section --> */}
        <div className="navbar-left">
          <img
            src="https://balticanebula.com/content/images/2023/06/plus-tailwind.jpg"
            alt="Logo"
          />
          <div className="navbar-links">
            <Link href="/" className="active">
              Dashboard
            </Link>
            <Link href="users">Users</Link>
            <Link href="posts">Posts</Link>
            <Link href="categories">Ctegories</Link>
            <Link href="contact">Contact</Link>
          </div>
          <div className="navbar-links">
            <input type="text" placeholder="search your post" />
            <button>Search</button>
          </div>
        </div>

        {/* <!-- Right Section --> */}
        <div className="navbar-right">
          <button className="new-job-btn">+ New Post</button>
          <img
            className="icon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5LEV-ApZUO6OUnu1ulvL8F3L91AqHlpD0Hw&s"
            width="30px"
            height="30px"
          />
          <img
            style={{ width: "45px", height: "30px" }}
            className="icon"
            src="https://www.wavetransit.com/wp-content/uploads/2021/08/Facebook-logo.png"
          />
          <img
            className="icon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJeJlx-HEr29YIB4b0GVBxDSAEEmQnRNFcMQ&s"
            width="30px"
            height="30px"
          />

          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.054-.595 1.436L4 17h5m6 0v1a3 3 0 01-6 0v-1m6 0H9" />
          </svg>
          <img
            src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
            width="30px"
            height="30px"
            alt="User Avatar"
            className="avatar"
          />
        </div>
      </nav>
    </body>
  );
};

export default Nav;
