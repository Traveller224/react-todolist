import React, { useState } from 'react';
import "./Dropdown.css"
import Icon from "./Icon"

const Dropdown = ({ item, change }) => {
	const [color, setColor] = useState(item.importance);

	function dropdownClick(e){
		e.currentTarget.classList.toggle("active");
	}

	return (
	<div id="dd" className="ddBox" onClick={(e) => {dropdownClick(e)}} onMouseLeave={(e) => {e.currentTarget.classList.remove("active");}}><Icon name="flag" color={color} />
		<ul className="dropdown">
			<li onClick={() => {setColor("gray"); change("gray", item.id)}}><Icon name="flag" color="gray"/></li>
			<li onClick={() => {setColor("orange"); change("orange", item.id)}}><Icon name="flag" color="orange"/></li>
			<li onClick={() => {setColor("red"); change("red", item.id)}}><Icon name="flag" color="red"/></li>
		</ul>
	</div>
	);
}

export default Dropdown;
