import React, { useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import Calender from './Calender';
import { authService, dbService } from "../myBase";

function Meal() {
	const [date,setDate] = useState({
	});
	const [today,setToday] = useState({});
	useEffect(()=>{
		
		
		const date = new Date().getDate();
		const month = new Date().getMonth()+1;
		console.log(date,month)
		setDate({
			month:month,
			date: date,
		})
		setToday({
			month:month,
			date: date,
		})
	},[])
	
  return (
	  <div>
	  	<Calender date={{year:2021,month:9}}/>
	  </div>
  );
}

export default Meal;
