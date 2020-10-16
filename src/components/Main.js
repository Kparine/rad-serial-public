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
		let temp = e.target.value;
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

	const [searchSerialCodes, { data }] = useLazyQuery(SERIAL_CODE_QUERY, {
		onCompleted: () => {
			setBikeData(data.bikes);
		},
		variables: { serialNumber: serialNumber },
	});

	/** Pass in result and create a new mutable array, Graphql std res is unmutable */

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
					<div
						className="button w-button"
						style={{ marginTop: "15px" }}
						aria-label="search serial codes"
						onClick={searchSerialCodes}
					>
						Search
					</div>
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
