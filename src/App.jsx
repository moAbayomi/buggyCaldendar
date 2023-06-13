import "./App.css";
import Calendar from "./Calendar";
import Header from "./Header";
import { getRGBColor, getAccessibleColor } from "./utils/makeRgb.js";
import {
	startOfMonth,
	startOfWeek,
	endOfMonth,
	endOfWeek,
	isSameMonth,
	isSameDay,
	eachDayOfInterval,
	format,
	addMonths,
	parseISO,
} from "date-fns";
import { v4 as uuidv4 } from "uuid";
import { addEvent, getEventForDay, removeEvent } from "./eventsLocal";
import { useState } from "react";
import useInput from "./hooks";
import Modal from "./Modal";
function App() {
	const dates = (date) => {
		const weekStart = startOfWeek(startOfMonth(date), { weekStartsOn: 1 });
		const weekEnd = endOfWeek(endOfMonth(date), { weekStartsOn: 1 });
		return eachDayOfInterval({ start: weekStart, end: weekEnd });
	};

	const [event, setEvent] = useState({
		id: null,
		name: null,
		startTime: null,
		endTime: null,
		isAllDay: false,
	});

	const gridBoxClick = (key, today) => {
		const newEvent = dates(month).filter((date, i) => {
			return key == i;
		});

		if (!newEvent.date) {
			setEvent({
				date: newEvent[0],
				...event,
			});
		}
	};

	const submit = () => {
		const newEvent = {
			...event,
			name: name.value,
			id: event.id || uuidv4(),
			startTime: checkBox ? undefined : startTime.value,
			endTime: checkBox ? undefined : endTime.value,
			isAllDay: checkBox,
			color: color1.value,
		};
		setEvent(newEvent);
		addEvent(newEvent);
		window.location.reload();
		/* 	reset(); */
	};

	/* 	const reset = () => {
		resetName();
		resetStartTime();
		resetEndTime();
		setCheckBox(false);
		event.id = null;
	}; */

	const [modalShow, setModalShow] = useState(false);

	let [month, setMonth] = useState(Date.now());

	const modalToggle = (
		key,
		date,
		event = getEventForDay(date),
		updatedEvent = null,
		deletedEvent = null
	) => {
		setModalShow(!modalShow);

		if (modalShow == false) {
			gridBoxClick(key, date);
		}

		if (typeof event == "object") {
			return event;
		}
	};

	const nextMonth = () => {
		month = addMonths(month, 1);
		setMonth(month);
	};

	const prevMonth = () => {
		month = addMonths(month, -1);
		setMonth(month);
	};

	const today = () => {
		month = addMonths(Date.now(), 0);
		setMonth(month);
	};
	const [name, resetName] = useInput("");
	const [checkBox, setCheckBox] = useState(false);

	const [startTime, resetStartTime] = useInput("");
	const [endTime, resetEndTime] = useInput("");
	const [color1, resetColor1] = useInput("##000000");

	const primaryColor = getRGBColor("#6231af", "primary");
	const a11yColor = getRGBColor(getAccessibleColor("#6231af"), "a11y");

	return (
		<>
			<div className="flex flex-col gap-4">
				<Header
					format={format}
					month={month}
					nextMonth={nextMonth}
					prevMonth={prevMonth}
					today={today}
				/>
				<Calendar
					dates={dates}
					month={month}
					modalToggle={modalToggle}
					isSameMonth={isSameMonth}
					isSameDay={isSameDay}
					addMonths={addMonths}
					format={format}
					event={event}
				/>
			</div>
			<Modal
				modalShow={modalShow}
				modalToggle={modalToggle}
				event={event}
				format={format}
				submit={submit}
				name={name}
				checkBox={checkBox}
				setCheckBox={setCheckBox}
				startTime={startTime}
				endTime={endTime}
				resetStartTime={resetStartTime}
				resetEndTime={resetEndTime}
				color1={color1}
				resetColor1={resetColor1}
				gridBoxClick={gridBoxClick}
			/>
		</>
	);
}

export default App;
