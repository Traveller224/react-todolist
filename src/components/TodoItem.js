import React, { useState } from "react"
import Icon from "./Icon"
import Dropdown from "./Dropdown"

function TodoItem(props){
	const completedStyle = {
		fontStyle:"italic",
		color:"#82a549",
		textDecoration:"line-through"
	}

	const [editText, saveText] = useState(props.item.text);
	const [editView, editHide] = useState(props.item.completed);
	const [saveView, saveHide] = useState(true);

	const viewB = (todoCheck) => {saveText(editText);
		if(todoCheck){editHide(true); saveHide(true); return}
		if(editView){editHide(false); saveHide(true);}
		else {editHide(true); saveHide(false)}
	}
	return (
		<div className="todo-item">
			<div style={{display:"flex"}}>
				<Dropdown item={props.item} change={props.changeImportance}/>
				<input type="checkbox" checked={props.item.completed} onChange={() => {props.handleChange(props.item.id); viewB(props.item.completed)}}/>
				<p hidden={!saveView} style={props.item.completed ? completedStyle: null}>{props.item.text}</p>
				<input type='text' hidden={saveView} style={{width:300, height:20, margin:"11px 0"}}
					onChange={e => {saveText(e.target.value);}}
					value={editText}
				/>
			</div>
			<div style={{display:"flex"}}>
				<button hidden={editView} style={{padding:"0px 2px"}} onClick={() => {viewB(); saveText(props.item.text)}}>
					<Icon name="pencil"/>
				</button>
				<button hidden={saveView} style={{padding:"0px 2px"}} onClick={() => {viewB(); props.saveTodo(props.item.id, editText);}}>
					{String.fromCharCode(10003)}
				</button>
				<button onClick={() => {props.deleteTodo(props.item.id);}}>Del me</button>
			</div>
		</div>
	)
}

export default TodoItem
