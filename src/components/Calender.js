import React, { useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import "../css/Calender.css"

function Calender({size, onClickDay, date, today}) {
	const [dayList,setDayList] = useState(Array(5).fill(Array(7)))
	
	
	useEffect(()=>{
		let day = (new Date(`${date.year}-${date.month}-01`).getDay())
		console.log(day)
		let isStart=false
		let newList = Array(5);
		for(let i=0;i<5;i++){
			newList[i] = new Array(7).fill(-1)
		}
		
		for(let i=0;i<5; i++){
			for(let j=0;j<7;j++){
				if(!isStart && j === day){
					day = 1;
					isStart = true;
				}
				if(isStart && day <= 31)
					newList[i][j] = day++;
				else
					newList[i][j] = - 1;
			}
		}
		setDayList(newList)
	},[])
	
  return (
	  <div id="calender-container">
	  {
		  dayList.map((list)=>{
  			return <div className="day-row">
				{
					list.map((day)=>{
						return <div className={"day-box "+(today.date===day?"today-box":(date.date === day?"current-box":""))} onClick={()=>{day!=-1 && onClickDay(day)}}>{day!=-1&&day}</div>
					})
  				}
  				</div>
  			})
	  }
	  </div>
  );
}

export default Calender;
