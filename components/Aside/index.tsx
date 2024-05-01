"use client";

import { useEffect, useState } from "react";
import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";
import useHandleDate from "@/Hook/Handle Date";
import { useSelector } from "react-redux";

function Aside() {
	const { AddDate } = useHandleDate();
	
	//todo: find a way that store don't refresh by relaoding page
	//todo: this return snapshot of store we need the store;
	const dateStore = useSelector((state: any) => state.dateStore);


	const [date, setDate] = useState<Date | undefined>(new Date());
	const [time, setTime] = useState<string>("12:00");
	
	const AddDateClickHandler = () => {
		AddDate(date!, time);
		console.log(dateStore)
	};

	return (
		<aside className="w-[256px] h-full max-md:w-full md:border-r-2 flex flex-col justify-start items-center gap-5">
			<Calendar
				mode="single"
				selected={date}
				onSelect={setDate}
			/>
			<Button onClick={AddDateClickHandler}>Add Date</Button>

			{dateStore.map((item: any, index: number) => <p key={index}>{item.date}</p>)}
		</aside>
	);
}

export default Aside;
