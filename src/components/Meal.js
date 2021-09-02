import React, { useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import Calender from './Calender';
import { authService, dbService } from "../myBase";

function Meal() {
	const [date,setDate] = useState({
		month:9,
		
	});
	useEffect(()=>{
		const date = new Date().now().getDate();
		const month = new Date().now().getMonth();
	},[])
	
  return (
	  <div>
	  	<Calender date={{year:2021,month:9}}/>
	  </div>
  );
}

export default Meal;
