import React, { useState } from 'react';
import "./Dropdown.css"
import Icon from "./icons/Icon"

const Dropdown = ({ color, change }) => {
	const [icon, setIcon] = useState("power");

	function dropdownClick(e){
		e.currentTarget.classList.toggle("active");
	}

	return (
	<div id="dd" className="ddBox" onClick={(e) => {dropdownClick(e)}} onMouseLeave={(e) => {e.currentTarget.classList.remove("active");}}><Icon name={icon} color={color} />
		<ul className="dropdown">
			<li onClick={() => {setIcon("power"); change("lightgray")}}><Icon name="power" color="lightgray"/></li>
			<li onClick={() => {setIcon("flag"); change("gray")}}><Icon name="flag" color="gray"/></li>
			<li onClick={() => {setIcon("flag"); change("orange")}}><Icon name="flag" color="orange"/></li>
			<li onClick={() => {setIcon("flag"); change("red")}}><Icon name="flag" color="red"/></li>
		</ul>
	</div>
	);
}

export default Dropdown;
