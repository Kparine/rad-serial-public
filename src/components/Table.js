import React from "react";
import MaterialTable from "material-table";

const data = [
	{
		model: "RadCity Stepthru",
		model_yr: "2011",
		manu_mth: 12,
		manu_yr: "Male",
		version: "1",
		unique: "004706",
	},
	{
		model: "Runner",
		model_yr: "2011",
		manu_mth: 24,
		manu_yr: "Male",
		version: "1",
		unique: "004706",
	},
	{
		model: "Marry",
		model_yr: "2011",
		manu_mth: 18,
		manu_yr: "Female",
		version: "1",
		unique: "004706",
	},
	{
		model: "Shohail",
		model_yr: "2011",
		manu_mth: 25,
		manu_yr: "Male",
		version: "1",
		unique: "004706",
	},
	{
		model: "Aseka",
		model_yr: "2011",
		manu_mth: 19,
		manu_yr: "Female",
		version: "1",
		unique: "004706",
	},
	{
		model: "Meuko",
		model_yr: "2011",
		manu_mth: 12,
		manu_yr: "Female",
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
