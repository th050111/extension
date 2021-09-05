import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import Calender from './Calender';
import { authService, dbService } from "../myBase";
import "../css/Meal.css"

function Meal() {
	const [date, setDate] = useState({
	});
	const [today, setToday] = useState({});
	const [mealList, setMealList] = useState({
		"중식": [],
		"석식": [],
	});
	const [dbMealList, setDbMealList] = useState({});
	const [type, setType] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [calenderOpen, setCalenderOpen] = useState(false);
	const [starList,setStarList] = useState({});

	useEffect(async () => {
		setIsLoading(true)
		const list = (await dbService.collection("meal").doc("mealList").get().then((snap) => {
			return snap.data()
		}))
		const startList = await dbService.collection("meal").doc("stars").get().then((snap) => {
			return snap.data();
		})
		console.log("hi",startList)
		setStarList(startList);
		setDbMealList(list)
		const date = new Date().getDate();
		const month = new Date().getMonth() + 1;
		const hour = new Date().getHours();
		if (hour < 14) {
			setType("중식")
		} else
			setType("석식")

		setDate({
			month: month,
			date: date,
		})
		setToday({
			month: month,
			date: date,
		})
		console.log(list[`${month}${date}`])
		setMealList(list[`${month}${date}`])
		setIsLoading(false)

	}, [])
	useEffect(() => {
		setMealList(dbMealList[`${date.month}${date.date}`])
		console.log(`${date.month}${date.date}`)
		console.log(dbMealList[`${date.month}${date.date}`])
	}, [date])

	return (
		<div>
			{!isLoading && <>
				<div id="type-selector">
					{
						<>
							<div className={`type ${type === "중식" ? "selected" : ""}`} onClick={() => setType("중식")}>중식</div>
							<div className={`type ${type === "중식" ? "" : "selected"}`} onClick={() => setType("석식")}>석식</div>
						</>
					}
				</div>
				<div id="day-selector">
					<div class="day-array">◀</div>
					<div onClick={() => setCalenderOpen((prev) => !prev)} className="day">{`${date.month}월 ${date.date}일`}</div>
					<div class="day-array">▶</div>
					{calenderOpen && <Calender date={{ year: 2021, month: date.month, date: date.date }} onClickDay={(day) => { setCalenderOpen(false); setDate({ ...date, date: day }) }} today={today} />}
				</div>
				<div id="meal-container">
					{
						mealList === undefined ? <div className="meal-element">식단이 없습니다..</div> :
							(
								mealList[type].map((el) => {
									return (
										<div style={{display:"flex"}} className="meal-element-container">
											<div className="meal-element" >{el.replace(/[0-9]/g, "").replace(/\./gi, "")}</div>
											<div className="star-list">
												{
													starList[el.replace(/[0-9]/g, "").replace(/\./gi, "")] === undefined ?
														<>
															<div className="star-fill" style={{width:"100px",color:"black"}}>
																<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
															</div>
															<div className="star">
																<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
															</div>
														</>
														: <>
															<div className="star-fill" style={{ width: `${Number(starList[el.replace(/[0-9]/g, "").replace(/\./gi, "")])*20}px`}}>
																<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
															</div>
															<div className="star">
																<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
															</div>
														</>
												}
											</div>
										</div>
									)
								}))
					}
				</div></>}
		</div>
	);
}

export default Meal;
