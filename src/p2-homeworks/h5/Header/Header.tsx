import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "../Content/Content";
import './Header.css'

function Header() {
   return (
      <div className="header">
         <div>
            <input type="checkbox" id="nav-toggle" hidden/>
            <nav className="nav">
               <label htmlFor="nav-toggle" className="nav-toggle"> </label>
               <h2 className="logo">
                  <a href="https://alexey2576.github.io/it-incubator__ignat-tasks/" className="git_page">GIT PAGES</a>
               </h2>
               <ul>
                  <li><NavLink className="link" to={PATH.PRE_JUNIOR}>
                     Pre-junior
                  </NavLink></li>
                  <li><NavLink className="link" to={PATH.JUNIOR}>
                     Junior
                  </NavLink></li>
                  <li><NavLink className="link" to={PATH.JUNIOR_PLUS}>
                     Junior-plus
                  </NavLink></li>
               </ul>
            </nav>
            <div className="mask-content"> </div>
         </div>
      </div>
   )
}

export default Header
