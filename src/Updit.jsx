import React from "react";

import { useState, useEffect } from "react";

const Updit = ({
	event,
	format,
	modalToggle,
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
	return (
		<form
			action="POST"
			onSubmit={(e) => {
				e.preventDefault();
				submit();
				modalToggle();
			}}
			className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white min-w-[15rem] p-3 `}
		>
			<div className="flex justify-between items-center my-2">
				<p>{event.id === null ? "Add Event" : "Edit Event"}</p>
				<p>{format(event.date, "M/d/yyyy")}</p>
			</div>
			<div className="flex flex-col gap-2 items-start my-2">
				<label htmlFor="name" className="py-0 my-0">
					Name
				</label>
				<input
					type="text"
					htmlFor="name"
					placeholder="Name"
					value={event.name ? "hehh" : name.value}
					onChange={(e) => {
						name.onChange(e);
					}}
					required
					className="outline-none border border-gray-200 "
				/>
			</div>

			<div className="flex gap-2  items-center">
				<input
					value={checkBox}
					onChange={() => {
						setCheckBox((checkBox) => !checkBox);
						if (!checkBox) {
							resetStartTime();
							resetEndTime();
						}
					}}
					type="checkbox"
				/>
				<label htmlFor="allday">All Day?</label>
			</div>
			<div className="flex items-start justify-start gap-2">
				<div className="flex flex-col justify-start items-start">
					<label htmlFor="starttime">Start time</label>
					<input
						{...startTime}
						type="time"
						disabled={checkBox}
						required={!checkBox}
					/>
				</div>
				<div className="flex flex-col justify-start items-start">
					<label htmlFor="endtime">End time</label>
					<input
						type="time"
						{...endTime}
						min={startTime.value}
						disabled={checkBox}
						required={!checkBox}
					/>
				</div>
			</div>

			<div className="flex flex-col justify-start items-start">
				<label htmlFor="color">Color</label>
				<div>
					<input
						type="color"
						id="red"
						{...color1}
						checked
						className="w-6 h-6 border-none outline-none shadow-none rounded-sm"
					/>
				</div>
			</div>
			<div className="flex gap-2 justify-center items-center">
				<button type="submit" className="bg-green-200 px-6 py-2 rounded-[10px]">
					Add/Save
				</button>
				<button
					className={`bg-red-200 px-6 py-2 rounded-[10px] `}
					onClick={() => {
						console.log(event);
					}}
				>
					Delete
				</button>
			</div>
		</form>
	);
};

export default Updit;
