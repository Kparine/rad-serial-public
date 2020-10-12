import React from "react";

export const Menu = () => {
	return (
		<div className="menu-container">
			<div className="menu-content">
				<img
					src={`https://cdn.shopify.com/s/files/1/0799/9645/t/67/assets/rad-bike-icon.svg`}
					className="menu-logo"
					alt="logo"
				/>
				<span className="menu-title">
					Rad <span className="menu-sub-title">Power Bikes - Serializer</span>
				</span>
			</div>
		</div>
	);
};
