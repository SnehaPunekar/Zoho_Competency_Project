import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import '../../assests/css/Navbar.css';

 import logo from '../../assests/images/logo.png';
const NavbarEmployee = () => {
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };
    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }
    return (
    <header className="header__middle">
        <div className="container">
            <div className="row">
                {/* Add Logo  */}
                <div className="header__middle__logo">
                     <NavLink exact activeClassName='is-active' to="/">
                        <img src={logo} className="logo"
                        alt="logo" /> 
                    </NavLink> 
                </div>
                
                <h5>{
                    ` Welcome,
                    ${localStorage.getItem('first_name')} ${localStorage.getItem('last_name')}
                    `
                    }</h5>    
                    


                
                    if(localStorage.getItem('role')=== 'Developer'){
                    
                 <div className="header__middle__menus">
                    <nav className="main-nav " >
                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}
                    <ul className={boxClass.join(' ')}>
                        <li  className="menu-item" >
                            <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/SelfAssessment`}> Self Assessment </NavLink> 
                        </li>
                         <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/LastSelfAssessment`}> View Self Assessment </NavLink> </li> 
                        <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Logout`}> Logout </NavLink> </li>
                    </ul>
                    </nav>     
                </div>   
                }
                
            </div>
	    </div>
    </header>
    )
}
export default NavbarEmployee;