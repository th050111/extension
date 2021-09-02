import React, { useState } from "react";
import ReactDOM from 'react-dom';
import "../css/Timer.css"

function Timer() {
	const [plans,setPlans] = useState([{
	title: "수학",
	detailPlans:[{
		body:"쎈 풀기",
		check:"complete",
	},{
		body:"쎈 풀기2",
		check:"complete",
	},
		],
		time: {
				hour:1,
				minute:1,
				second:1,
			}
	}])
	const [totalTime,setTotalTime] = useState({
				hour:1,
				minute:1,
				second:1,
			})
	const [viewPlan,setViewPlan] = useState("")
	
	const onPlan = (plan)=> {
	
	}

  return (
	  <>
	  <div>
	  	<img src="/assets/image/timer.png" style={{
	  	position:"absolute",
	  	top: "50%",
	  	left: "50%",
	  	transform:"translate(-50%,-50%)",
	  	width:"50px"
	  }} onClick={()=>console.log("click")}></img>
	  <div id="time-container">
		  <div className="total-time">
			  {`${totalTime.hour}:${totalTime.minute}:${totalTime.second}`}
		  </div>
	  </div>
	  <div id="plans-container">
		{
		  plans.map((plan)=><div className="plan" onClick={()=>onPlan(plan)}>
			  <div className="plan-title">{plan.title}</div>
			  <div className="check-list">
				  	{
				  		plan.detailPlans.map((detailPlan)=><div className="check-box"></div>)
			  		}
				</div>
				<div className="plan-time">
	{`${plan.time.hour}:${plan.time.minute}:${plan.time.second}`}
				</div>
			  </div>)
	  	}
	  </div>
		{viewPlan!="" && <ViewDetail plan={viewPlan} close={()=>setViewPlan("")}/>}
	  </div>
		</>
  );
}




const ViewDetail = ({plan, close}) =>{
	return(
		<div id="view-container">
			<div style={{display:"flex",width:"100%"}}>
				<div className="plan-title">{plan.title}</div>
				<div className="plan-time">{`${plan.time.hour}:${plan.time.minute}:${plan.time.second}`}</div>
			</div>
			<div className="detail-plan-list">
				<div ></div>
			</div>
		</div>
	)
}

export default Timer;
