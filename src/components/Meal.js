import React, { useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import Calender from './Calender';
import { authService, dbService } from "../myBase";
import "../css/Meal.css"

function Meal() {
	const [date,setDate] = useState({
	});
	const [today,setToday] = useState({});
	const [mealList,setMealList] = useState({
		"중식":[],
		"석식":[],
	});
	const [dbMealList,setDbMealList] = useState({});
	const [type,setType] = useState();
	const [isLoading,setIsLoading] = useState(true);
	
	useEffect(async ()=>{
		setIsLoading(true)
		const list = (await dbService.collection("meal").doc("mealList").get().then((snap)=>{
			return snap.data()
		}))
		const date = new Date().getDate();
		const month = new Date().getMonth()+1;
		const hour = new Date().getHours();
		if(hour <14){
			setType("중식")
		} else
			setType("석식")
		
		setDate({
			month:month,
			date: date,
		})
		setToday({
			month:month,
			date: date,
		})
		console.log(list[`${month}${date}`])
		setMealList(list[`${month}${date}`])
		setIsLoading(false)
		
	},[])
	
  return (
	  <div>
	  {!isLoading && <>
		<div id="type-selector">
		{
			<>
				<div className={`type ${type ==="중식"?"selected":""}`} onClick={()=>setType("중식")}>중식</div>
				<div className={`type ${type ==="중식"?"":"selected"}`} onClick={()=>setType("석식")}>석식</div>
			</>
		}
		</div>
		<div id="meal-container">
		<div className="meal-type">{type}</div>
	  {
	  	mealList[type].map((el)=>{
  	return <div className="meal-element">{el.replace(/[0-9]/g,"").replace(/\./gi,"")}</div>
  })
	  }
	  	</div></>}
	  </div>
  );
}

export default Meal;
