import React, { useState } from "react";
import ReactDOM from 'react-dom';
import "../css/App.css"
import Timer from "./Timer"
import Meal from "./Meal"
import Planner from "./Planner"
import Option from "./Option"
import Notice from "./Notice"


function App() {
	const [isSideMenu,setIsSideMenu] = useState(false)
	const [type,setType] = useState("timer")
	const [menuList,setMenuList] = useState([
		{
			title: "타이머",
			type: "timer"
		},
		{
			title: "플래너",
			type: "planner"
		},
		{
			title: "급식표",
			type: "meal"
		},
		{
			title: "공지사항",
			type: "notice"
		},
		{
			title: "설정",
			type: "option"
		}
	])
	
	const openNav=()=> {
		setIsSideMenu(true)		
		document.querySelector("#menu-side-container").style.width = '50%';		
	}
	const closeNav=()=> {
		document.querySelector("#menu-side-container").style.width = '0';
		setIsSideMenu(false)
	}

	
  return (
	  <>
    <div id="main-container">
	  <div style={{display:"flex"}}>
	  	<div id="menu-side-container">
	  <div>
		{
			menuList.map((menu,index)=><a key={index} href='#' onClick={()=>{closeNav();setType(menu.type);}}>{menu.title}</a>
)	
		}
		</div>
<img src="/assets/image/menu-toggle.png" className="menu-toggle" onClick={isSideMenu?closeNav:openNav}></img>
	</div>
<img src="/assets/image/menu-toggle.png" className="menu-toggle" onClick={isSideMenu?closeNav:openNav}></img>
</div>
	<div id="content-container" style={{position:"absolute",zIndex:"10"}}>
	  {
		  {
			  timer:<Timer />,
			  planner:<Planner/>,
			  meal:<Meal/>,
			  notice:<Notice/>,
			  option:<Option/>
		  }[type]
	  }
	</div>
	</div>
	</>
  );
}

export default App;
