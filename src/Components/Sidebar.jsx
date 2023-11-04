import React from "react";
import { ReactDOM } from "react";
import "./Assets/temp-img.png";
import { AiFillInfoCircle, AiFillMessage, AiFillPhone, AiFillSetting, AiOutlineLeft, AiOutlineRight, AiOutlineSearch } from "react-icons/ai";

function Sidebar() {

  return (
    <div>
      <navbar className="sidebar">
        <div className="side-list">
          <ul className="side-links">
            <li id="side-title"><a href="#"><img className="side-logo" src={require('./Assets/cogro-logo.png')} /> <span className="cogro-title">CoGro</span><span id="sd-slogan" style={{fontSize: "0.8rem"}}>Collab, Connect, Grow..!</span></a></li>
            <li><a href="#"><AiOutlineSearch /> <span id="sl-label">Search</span></a></li>
            <li><a href="#"><AiFillPhone /> <span id="sl-label">Contact</span></a></li>
            <li><a href="#"><AiFillInfoCircle /> <span id="sl-label">About us</span></a></li>
            <li><a href="#"><AiFillSetting /> <span id="sl-label">Settings</span></a></li>
          </ul>
        </div>

        <div className="side-low">
          <a href="#"><div className="profile-side-mein"><img className="side-profile" src={require('./Assets/temp-img.png')} /> <div className="profile-name"><abbr title="Your Instagram Username"><span id="sd-username">@username</span></abbr></div></div></a>
          
          <ul className="side-links" id="below-links">
          </ul>
        </div>

      </navbar>
    </div>
  );
}

export default Sidebar;