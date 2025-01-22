import React from "react";
import "./SideBar.css";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="sidebar">
      <nav className="menu">
        <Link href="home" className="menu-item ">
          <i className="icon">🏠</i> Dashboard
        </Link>
        <Link href="users" className="menu-item">
          <i className="icon">👥</i> Users
        </Link>
        <Link href="posts" className="menu-item">
          <i className="icon"> 📨</i> Posts
        </Link>
        <Link href="categories" className="menu-item">
          <i className="icon">🪟</i> Categories
        </Link>
        <Link href="#" className="menu-item">
          <i className="icon">📄</i> Documents
        </Link>
        <Link href="#" className="menu-item">
          <i className="icon">📊</i> Reports
        </Link>
      </nav>

      <div className="settings">
        <a href="#" className="menu-item">
          <i className="icon">⚙️</i> Settings
        </a>
      </div>
    </div>
  );
};
export default SideBar;
