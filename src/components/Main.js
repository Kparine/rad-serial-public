import React, { useState } from "react";
import MaterialTable from "material-table";

import { gql, useLazyQuery } from "@apollo/client";

const columns = [
	{
		title: "Model",
		field: "modelCode",
	},
	{
		title: "Model Year",
		field: "yearCode",
	},
	{
		title: "Manuf. Month",
		field: "monthCode",
	},
	{
		title: "Manuf. Year",
		field: "manufYear",
	},
	{
		title: "Version",
		field: "version",
	},
	{
		title: "Unique",
		field: "unique",
	},
];

export const Main = () => {
	const [serialNumber, setSearch] = useState([]);
	const [bikeData, setBikeData] = useState([]);

	const digestSerialCodes = (e) => {
		e.preventDefault();
		let temp = e.target.value;
		if (!e.target.value) return setSearch([]);
		temp = temp.replace(/\n\r?/g, ",").split(",");
		setSearch(temp);
	};

	const SERIAL_CODE_QUERY = gql`
		query bikes($serialNumber: [String!]) {
			bikes(serialNumber: $serialNumber) {
				modelCode
				yearCode
				monthCode
				manufYear
				factoryCode
				version
				unique
			}
		}
	`;

	const [searchSerialCodes, { data, error}] = useLazyQuery(SERIAL_CODE_QUERY, {
		onCompleted: () => {
			if (data) setBikeData(data.bikes);
			if (!data) console.log(error,"no data")
		},
		variables: { serialNumber: serialNumber },
	});

	/**
	 * @param {arraynpm run } bikeData
	 * Graphql std res is immutable, pass through map to create new mutable array for <Material Table/>
	 * */

	let editable;
	if (bikeData) {
		editable = bikeData.map((o) => ({ ...o }));
	}


	return (
		<div>
			<div className="main-comp-container">
				<div className="main-content">
					<textarea
						rows="5"
						cols="35"
						placeholder="Enter Serial Codes..."
						onChange={digestSerialCodes}
					></textarea>
					<button
						className="button w-button"
						aria-label="search serial codes"
						onClick={searchSerialCodes}
						disabled={!serialNumber.length ? true : false}
						style={{
							marginTop: "15px",
							cursor: !serialNumber.length? "not-allowed" : "pointer",
							backgroundColor: !serialNumber.length ? "#d3d3d3" : "#f26326",
							border: !serialNumber.length
								? "2px solid #d3d3d3"
								: "2px solid #f26326",
						}}
					>
						Search
					</button>
				</div>
			</div>
			<div>
				{bikeData.length ? (
					<MaterialTable
						title="Serial Code Details"
						data={editable}
						columns={columns}
						options={{
							search: false,
							paging: false,
							sorting: false,
							filtering: false,
							exportButton: false,
						}}
						style={{ minWidth: "75%" }}
					/>
				) : null}
			</div>
		</div>
	);
};
