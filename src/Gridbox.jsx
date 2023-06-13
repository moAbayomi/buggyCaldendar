import React from "react";
import { getEventForDay } from "./eventsLocal";
import Events from "./Events";

const Gridbox = ({
	modalToggle,
	date,
	index,
	month,
	isSameMonth,
	isSameDay,
	format,
	event,
}) => {
	const sameMonth = true;
	const today = month;

	return (
		<div
			className={`min-w-[7rem] min-h-[8rem] border ${
				isSameMonth(date, today) ? "" : "bg-gray-300"
			} border-gray-400 text-xs px-1 relative flex flex-col items-center`}
		>
			<div
				className="aspect-[3/3] text-gray-300 hover:text-gray-600 top-1 text-sm right-1 z-10 absolute cursor-pointer"
				onClick={() => modalToggle(index, date)}
			>
				+
			</div>
			<p className="text-center">{index < 7 ? format(date, "E") : null}</p>
			<div
				className={`flex justify-center items-center w-5 h-5 rounded-full ${
					isSameDay(today, date) ? "bg-green-500" : ""
				}`}
			>
				<p className="text-center">{date.getDate()}</p>
			</div>
			<div className="grid gap-2 w-full text-left">
				{getEventForDay(date).map((event, i) => {
					return (
						<Events
							key={i}
							index={index}
							date={date}
							event={event}
							modalToggle={modalToggle}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Gridbox;
