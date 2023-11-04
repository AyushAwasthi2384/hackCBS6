import React from "react";
import { ReactDOM } from "react";
import "./Assets/temp-img.png";
import { AiFillMessage, AiFillPhone, AiFillSetting, AiOutlineLeft, AiOutlineRight, AiOutlineSearch } from "react-icons/ai";
function Sidebar() {
  return (
    <div>
      <navbar className="sidebar">
        <div className="side-list">
          <ul className="side-links">
            <li id="side-title"><a href="#"><img src={require('./Assets/cogro-logo.png')} /> <span>CoGro</span></a></li>
            <li><a href="#"><AiOutlineSearch /> <span id="sl-label">Search</span></a></li>
            <li><a href="#"><AiFillMessage /> <span id="sl-label">Inbox</span></a></li>
            <li><a href="#"><AiFillPhone /> <span id="sl-label">Contact</span></a></li>
          </ul>
        </div>

        <div className="side-low">
          <a href="#"><div className="profile-side-mein"><img className="side-profile" src={require('./Assets/temp-img.png')} /> <div className="profile-name"><abbr title="Your Instagram Username"><span id="sd-username">@username</span></abbr></div></div></a>
          <span className="sd-arr sidebar-expand"><AiOutlineRight /></span>
          <span className="sd-arr sidebar-Collapse"><AiOutlineLeft /></span>
          <ul className="side-links" id="below-links">
            <li><a href="#"><AiFillSetting /> <span id="sl-label">Settings</span></a></li>
          </ul>
        </div>


      </navbar>
    </div>
  );
}

export default Sidebar;