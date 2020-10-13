import React, { useState } from "react";

export const Main = () => {
	const [setSearch] = useState([]);

	const digestSerialCodes = (e) => {
		let text = e.target.value;
		text = text.replace(/\n\r?/g, ",").split(",");
		setSearch(text);
	};

	return (
		<div className="main-comp-container">
			<div className="main-content">
				<textarea
					rows="5"
					cols="35"
					placeholder="Enter Serial Codes..."
					onChange={digestSerialCodes}
				></textarea>
				<div
					className="button w-button"
					style={{ marginTop: "15px" }}
					aria-label="search serial codes"
					onClick={(e) => {
						console.log("e ******------>>>>>>", e.target);
					}}
				>
					Search
				</div>
			</div>
		</div>
	);
};
