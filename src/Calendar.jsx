import React from "react";
import Gridbox from "./Gridbox";

const Calendar = ({
	modalToggle,
	updateModal,
	dates,
	month,
	isSameDay,
	isSameMonth,
	format,
	event,
}) => {
	let today = month;

	return (
		<div className="grid grid-cols-7 grid-flow-row grid-rows-5 border border-gray-300">
			{dates(today).map((date, i) => {
				return (
					<Gridbox
						date={date}
						key={i + 1}
						index={i}
						month={month}
						modalToggle={modalToggle}
						updateModal={updateModal}
						isSameMonth={isSameMonth}
						isSameDay={isSameDay}
						format={format}
						event={event}
					/>
				);
			})}
		</div>
	);
};

export default Calendar;
