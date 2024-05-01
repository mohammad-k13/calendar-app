"use client";

import { addDate } from "@/store/DateSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useHandleDate() {
	const [formattedDate, setFromattedDate] = useState<string>("");
	const dateStore = useSelector((state: any) => state.dateStore);
	const dispath = useDispatch();

	const FormatDate = (date: Date) => {
		let year: number, month: number, day: number, format: string;

		year = date.getFullYear();
		month = date.getMonth();
		day = date.getDate();

		format = `${month}/${day}/${year}`;

		setFromattedDate(format);
	};

	const AddDate = (date: Date, time: string) => {
		FormatDate(date);
		let addDateFormat: { date: string; time: string, } = { date: formattedDate, time: time };

		dispath(addDate(addDateFormat));
	};
	const RemoveDate = () => {};

      return {
            FormatDate, 
            AddDate,
            RemoveDate
      }
}
