// import { createSlice } from '@reduxjs/toolkit'

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0
//   },
//   reducers: {
//     increment: state => {
//       state.value += 1
//     },
//     decrement: state => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     }
//   }
// })

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

type dateItem = {
	date: string;
	id: string | number;
	time: string[];
};

type AddDatePayload = {
	date: string;
	time: string;
};
const initialState: dateItem[] = [
	{ id: 1, date: "2024/25/5", time: ["12:00"] },
	{ id: 2, date: "2024/25/5", time: ["12:00"] },
];

export const SelectedDateSlice = createSlice({
	name: "selectedDate",
	initialState: initialState,
	reducers: {
		addDate: (state, { payload }: { payload: AddDatePayload }) => {
			const generatedId = `${Math.floor(Math.random() * 1000)} ${payload.date}`;
			const ExistingDateIndex = state.findIndex((date) => date.date === payload.date);
			let updatedDate: dateItem;

			if (ExistingDateIndex > -1) {
				state[ExistingDateIndex].time.push(payload.time);
			} else {
				updatedDate = { id: generatedId, date: payload.date, time: [payload.time] };
				state.push(updatedDate);
			}
		},
		removeDate: (state, { payload }: { payload: { id: string | number } }) => {
			state.filter((date) => date.id !== payload.id);
		},
	},
});


export const { addDate, removeDate } = SelectedDateSlice.actions;
export default SelectedDateSlice.reducer;