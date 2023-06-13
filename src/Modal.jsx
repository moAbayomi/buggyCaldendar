import React from "react";
import Updit from "./Updit";
import { removeEvent } from "./eventsLocal";

const Modal = ({
	modalShow,
	modalToggle,

	event,
	format,
	submit,
	startTime,
	endTime,
	resetStartTime,
	resetEndTime,
	name,
	checkBox,
	setCheckBox,
	color1,
	resetColor1,
}) => {
	if (!modalShow) return null;
	return (
		<>
			<div
				className="content-[''] fixed top-0 left-0 right-0 bottom-0 bg-gray-100 opacity-60"
				onClick={modalToggle}
			></div>
			<div>
				<Updit
					modalShow={modalShow}
					modalToggle={modalToggle}
					event={event}
					submit={submit}
					format={format}
					startTime={startTime}
					endTime={endTime}
					resetStartTime={resetStartTime}
					resetEndTime={resetEndTime}
					name={name}
					checkBox={checkBox}
					setCheckBox={setCheckBox}
					color1={color1}
					resetColor1={resetColor1}
				/>
			</div>
		</>
	);
};

export default Modal;
