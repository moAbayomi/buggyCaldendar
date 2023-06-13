import React from "react";

const Header = ({ format, nextMonth, prevMonth, today, month }) => {
	return (
		<header className="flex justify-start gap-4">
			<button className="bg-gray-300" onClick={today}>
				Today
			</button>
			<button onClick={prevMonth}>&lt;</button>
			<button onClick={nextMonth}>&gt;</button>
			<p>{format(month, "MMMM yyyy")}</p>
		</header>
	);
};

export default Header;
