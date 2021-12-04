import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "../Content/Content";
import './Header.css'

function Header() {
   return (
      <div className="header">
         <NavLink className="link" to={PATH.PRE_JUNIOR}>
            Pre-junior
         </NavLink>
         <NavLink className="link" to={PATH.JUNIOR}>
            Junior
         </NavLink>
         <NavLink className="link" to={PATH.JUNIOR_PLUS}>
            Junior-plus
         </NavLink>
      </div>
   )
}

export default Header
