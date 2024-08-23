import React from "react";
import "./sidebarButton.css";
import {Link, useLocation} from "react-router-dom"
import { IconContext } from "react-icons/lib";
function SidebarButton(props) {
    const location=useLocation()
    const isactive=location.pathname===props.to
    const btnClass=isactive ? "btn-body active":"btn-body"
    return (
    <Link to={props.to}>
      <div className={btnClass}>
        <IconContext.Provider value={{size:"24px",className:"btn-icon"}}>
        {props.icon}
        <p className="btn-title">{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  
  );
}

export default SidebarButton;
