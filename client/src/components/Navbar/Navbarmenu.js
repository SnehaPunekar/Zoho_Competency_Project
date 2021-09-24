import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import logo from '../../assests/images/logo.png';
import '../../assests/css/Navbar.css';

const Navbarmenu = () => {
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

                        {/* if(localStorage.getItem('role')=== 'Admin'){ */}
                    
                 <div className="header__middle__menus">
                    <nav className="main-nav " >
                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}
                    <ul className={boxClass.join(' ')}>
                        {/* <li  className="menu-item" >
                            <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/CompetencyArea`}> Competency Area </NavLink> 
                        </li>
                         <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/CompetencyDescriptor`}> Competency Descriptor </NavLink> </li>  */}
                        <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Template <FiChevronDown /> </Link>
                            <ul className={boxClassSubMenu.join(' ')} > 
                           
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/AddTemplate`}> Add Template </NavLink> </li>
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/CreateTemplate`}> Create Template </NavLink> </li>
                                <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/ViewTemplate`}> View Template </NavLink> </li> 
                            </ul>
                        </li>

                        <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Add <FiChevronDown /> </Link>
                            <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/CompetencyArea`}> Competency Area </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/CompetencyDescriptor`}> Competency Descriptor </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Rating`}> Rating </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/ReviewCycle`}> Review Cycle </NavLink> </li>
                                
                            </ul>
                        </li>

                        {/* <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Rating`}> Rating </NavLink> </li>
                        <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/ReviewCycle`}> Review Cycle </NavLink> </li> */}
                        <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Assessment <FiChevronDown /> </Link>
                            <ul className={boxClassSubMenu.join(' ')} > 
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/SelfAssessment`}> Self Assessment </NavLink> </li>
                                <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/LastSelfAssessment`}> View Self Assessment </NavLink> </li>            
                            </ul>
                        </li>
                        <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Logout`}> Logout </NavLink> </li>
                    </ul>
                    </nav>     
                </div>   
                
                

                
            </div>
	    </div>
    </header>
    )
}
export default Navbarmenu;