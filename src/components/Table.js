import React from "react";
import MaterialTable from "material-table";

const data = [
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

export const Table = () => {
	return (
		<MaterialTable
			title="Serial Code Details"
			data={data}
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
	);
};
