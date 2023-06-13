import React from "react";

import { updateEvent, removeEvent } from "./eventsLocal";

const Events = ({ event, index, modalToggle, date }) => {
	const updtEvent = function (eventhhe) {
		updateEvent(eventhhe);
	};

	const rmvEvent = function (eventhehe) {
		removeEvent(eventhehe);
	};
	return event.isAllDay === true ? (
		<div
			className={`bg-blue-500 rounded-sm shadow-sm w-full py-1 px-2 cursor-pointer`}
			onClick={() => modalToggle(index, date, event)}
		>
			{event.name}
		</div>
	) : (
		<div
			className={`flex items-center gap-1 bg-yellow-500 rounded-sm shadow-sm w-full py-1 px-2 cursor-pointer`}
			onClick={clickEvent}
		>
			<div className="w-1 h-1 bg-gray-600 rounded-full"></div>{" "}
			<div className="text-[0.6rem] text-gray-500">{event.startTime}</div>{" "}
			{event.name}
		</div>
	);
};

export default Events;
