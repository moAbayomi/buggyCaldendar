import { isSameDay, parseISO } from "date-fns";

const EVENTS_KEY = "CALENDR.events";

export let events = JSON.parse(localStorage.getItem(EVENTS_KEY)) || [];

export function addEvent(event) {
	events.push(event);
	save();
}

export function getEventForDay(date) {
	const dayEvent = events
		.filter((event) => isSameDay(parseISO(event.date), date))
		.sort(compareEvents);

	return dayEvent;
}

export function updateEvent(event) {
	events = event.map((e) => {
		if (e.id === event.id) return event;
		return e;
	});
	save();
}

export function removeEvent(event) {
	events = event.filter((e) => e.id !== event.id);
	save();
}

function compareEvents(eventA, eventB) {
	if (eventA.isAllDay && eventB.isAllDay) {
		return 0;
	} else if (eventA.isAllDay) {
		return -1;
	} else if (eventB.isAllDay) {
		return 1;
	} else
		return (
			eventTimeToNumber(eventA.startTime) - eventTimeToNumber(eventB.startTime)
		);
}

function eventTimeToNumber(time) {
	return parseFloat(time.replace(":", "."));
}

function save() {
	localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
}
