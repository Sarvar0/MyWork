import React, { useState } from "react";
import "./Navbar.css";
function Navbar(props) {

	const [color, setColor]= useState ('light')
  const [btnColor, setBtnColor]= useState ('button')
  

	const darkAndLight =(e)=>{
		if (color === 'light' && btnColor === 'button'){
			setColor("dark")
      setBtnColor('dark_button')
		}else {
			setColor('light')
      setBtnColor('button')
		}
	}

  return (
    <header className={`${color}`}>
      <div className={"brands"}>
        <a className="Logo" href="#">
          ONLINE SHOP
        </a>
      </div>

      <ul className="nav_links">
        <li className="dropdown" >  
        <a className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" href="">Catalog</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Phones</a></li>
              <li><a class="dropdown-item" href="#">Computers</a></li>
              <li><a class="dropdown-item" href="#">Laptops</a></li>
            </ul>
          
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
        <li>
          <a href="#">LogOut</a>
        </li>
        <li>
          <a className="cta" href="#">
            <button className={`${btnColor}`}>Contact</button>
          </a>
        </li>
        <li>
			<button className={`${btnColor}`} onClick={darkAndLight}>Dark Light</button>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
