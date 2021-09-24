import React, { useState } from "react";
import styled from "styled-components";
import { SidebarData,SidebarDataLead,SidebarDataDeveloper } from "./SidebarData";
import SubMenu from "./SubMenu";


const SidebarNav = styled.nav`
background: #696969;
width: 280px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0px;
left:0px;
transition: 350ms;
z-index: 10;
overflow-y:auto;
`;

const SidebarWrap = styled.div`
width: 100%;
`;

// const Sidebar = () => {
// const [sidebarData,setSidebarData] = useState([])
// const [sidebar] = useState(false);

// const showSidebar = () => setSidebar(!sidebar);

	// if(localStorage.getItem('role') === 'Lead'){
	// 	setSidebarData(SidebarDataLead)
	// }
	// else{
	// 	setSidebarData(SidebarData)	
	// }

	const Sidebar = () => {
	const [sidebar] = useState(false);

	

// return (
//     <SidebarNav><SidebarNav sidebar={sidebar}>
// 	 	<SidebarWrap>
// 			{sidebarData.map((item, index) => {
// 	 		return <SubMenu item={item} key={index} />;
// 	 		})}
// 	 	</SidebarWrap>
// 	 	</SidebarNav></SidebarNav>
// );
// };

return (
	<>
	{
		localStorage.getItem('role') === 'Lead' &&
		<SidebarNav><SidebarNav sidebar={sidebar}>
	 	<SidebarWrap>
			{/* <NavIcon to="#">
	 		<AiIcons.AiOutlineClose onClick={showSidebar} />
	 		</NavIcon> */}
			{SidebarDataLead.map((item, index) => {
	 		return <SubMenu item={item} key={index} />;
	 		})}
	 	</SidebarWrap>
	 	</SidebarNav></SidebarNav>
	}
	{
		localStorage.getItem('role') === 'Developer' &&
		<SidebarNav><SidebarNav sidebar={sidebar}>
	 	<SidebarWrap>
			{/* <NavIcon to="#">
	 		<AiIcons.AiOutlineClose onClick={showSidebar} />
	 		</NavIcon> */}
			{SidebarDataDeveloper.map((item, index) => {
	 		return <SubMenu item={item} key={index} />;
	 		})}
	 	</SidebarWrap>
	 	</SidebarNav></SidebarNav>
	}
	{
		localStorage.getItem('role') == 'Admin' &&
		<SidebarNav><SidebarNav sidebar={sidebar}>
	 	<SidebarWrap>
			{/* <NavIcon to="#">
	 		<AiIcons.AiOutlineClose onClick={showSidebar} />
	 		</NavIcon> */}
			{SidebarData.map((item, index) => {
	 		return(
				<SubMenu item={item} key={index} />
			 )
	 		})}
	 	</SidebarWrap>
	 	</SidebarNav></SidebarNav>
	}
	</>
)};

export default Sidebar;

