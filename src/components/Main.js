import React, { useState } from "react";
import MaterialTable from "material-table";

import { gql, useLazyQuery } from "@apollo/client";

const dataResults = [
	{
		model: "RadCity Stepthru",
		model_yr: "2011",
		manu_mth: 12,
		manu_yr: "2014",
		version: "1",
		unique: "004706",
	},
	{
		model: "Runner",
		model_yr: "2011",
		manu_mth: 6,
		manu_yr: "2014",
		version: "1",
		unique: "004706",
	},
	{
		model: "Small Cargo Box",
		model_yr: "2011",
		manu_mth: 9,
		manu_yr: "2014",
		version: "1",
		unique: "004706",
	},
	{
		model: "Flatbed",
		model_yr: "2011",
		manu_mth: 10,
		manu_yr: "2014",
		version: "1",
		unique: "004706",
	},
	{
		model: "RadRhino",
		model_yr: "2011",
		manu_mth: 11,
		manu_yr: "2014",
		version: "1",
		unique: "004706",
	},
	{
		model: "RadWagon",
		model_yr: "2011",
		manu_mth: 12,
		manu_yr: "2014",
		version: "1",
		unique: "004706",
	},
];

const columns = [
	{
		title: "Model",
		field: "model",
	},
	{
		title: "Model Year",
		field: "model_yr",
	},
	{
		title: "Manuf. Month",
		field: "manu_mth",
	},
	{
		title: "Manuf. Year",
		field: "manu_yr",
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
	const [setSearch] = useState([]);

	const digestSerialCodes = (e) => {
		let temp = e.target.value;
		temp = temp.replace(/\n\r?/g, ",").split(",");
		setSearch(temp);
	};

	const SERIAL_CODE_QUERY = gql`
		{
			bikes(serialNumber: ["YD419F201062", "YD419F201061"]) {
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

	const [searchSerialCodes, { loading, error, data }] = useLazyQuery(
		SERIAL_CODE_QUERY
	);
	if (loading) console.log("loading ******------>>>>>>", loading);
	if (error) console.log("error ******------>>>>>>", error);
	if (data) console.log("data ******------>>>>>>", data);

	const token =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.UoX4WU0IZB-nH48rBZRXxVbla70F8aV49-bfhc7l58A";
	localStorage.setItem("token", token);

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
			<MaterialTable
				title="Serial Code Details"
				data={dataResults}
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
		</div>
	);
};
