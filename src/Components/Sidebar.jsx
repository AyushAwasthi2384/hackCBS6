import React from "react";
import { ReactDOM } from "react";
import "./Assets/temp-img.png";
import { AiFillMessage, AiFillPhone, AiFillSetting, AiOutlineLeft, AiOutlineRight, AiOutlineSearch } from "react-icons/ai";
function Sidebar() {
  return (
    <div>
      <navbar className="sidebar">
        <div className="side-list">
          <a href="#"><img src={require('./Assets/temp-img.png')} /> <span>Profile</span></a>
          <ul className="side-links">
            <li><a href="#"><img src={require('./Assets/temp-img.png')} /> CoGro</a></li>
            <li><a href="#"><AiOutlineSearch /> <span>Search</span></a></li>
            <li><a href="#"><AiFillMessage /> <span>Inbox</span></a></li>
            <li><a href="#"><AiFillPhone /> <span>Contact</span></a></li>
          </ul>
        </div>

        <div className="side-low">
          <span className="sidebar-expand"><AiOutlineRight /></span>
          <span className="sidebar-Collapse"><AiOutlineLeft /></span>
          <ul className="side-links" id="below-links">
            
            <li><a href="#"><AiFillSetting /> <span>Settings</span></a></li>
          </ul>
        </div>


      </navbar>
    </div>
  );
}

export default Sidebar;