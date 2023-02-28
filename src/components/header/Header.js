import React from "react";

function Header() {
  return (
    <div>
      <div className="logo">
        <img src="Logo.svg" alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/blog">Menu</a>
          </li>
          <li>
            <a href="/blog">Reservations</a>
          </li>
          <li>
            <a href="/blog">Order Online</a>
          </li>
          <li>
            <a href="/blog">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
