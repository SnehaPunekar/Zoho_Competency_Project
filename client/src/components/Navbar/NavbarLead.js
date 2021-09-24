import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import '../../assests/css/Navbar.css';
import logo from '../../assests/images/logo.png'

//  import logo from '../components/img/logo.png';
const NavbarLead = () => {
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
                        <img src={logo} className="logo" alt="logo" /> 
                    </NavLink> 
                </div>
                
                
                <h5>{
                    ` Welcome,
                    ${localStorage.getItem('first_name')} ${localStorage.getItem('last_name')}
                    `
                    }</h5>    

                      
                
                    if(localStorage.getItem('role')=== 'Lead'){
                 <div className="header__middle__menus">
                    <nav className="main-nav " >
                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}
                    <ul className={boxClass.join(' ')}>
                        
                        <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Template <FiChevronDown /> </Link>
                            <ul className={boxClassSubMenu.join(' ')} > 
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/AddTemplate`}> Add Template </NavLink> </li>
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/CreateTemplate`}> Create Template </NavLink> </li>
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/AssignTemplate`}> Assign Template </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/ViewTemplate`}> View Template </NavLink> </li>
                            </ul>
                        </li>
                        <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Assessment <FiChevronDown /> </Link>
                            <ul className={boxClassSubMenu.join(' ')} > 
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/LeadAssessment`}> Lead Assessment </NavLink> </li>
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/LastLeadAssessment`}> View Lead Assessment </NavLink> </li>
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/SelfAssessment`}> Self Assessment </NavLink> </li>
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/LastSelfAssessment`}> View Self Assessment </NavLink> </li>
                            </ul>
                        </li>
                         <li className="menu-item " >
                             <NavLink onClick={toggleClass} activeClassName='is-active' to={`/Logout`}> Logout </NavLink> </li>
                    </ul>
                    </nav>     
                </div>     
                }
                

                
                   
            </div>
	    </div>
    </header>
    )
}
export default NavbarLead;