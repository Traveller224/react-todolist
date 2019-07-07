import { useState } from 'react';

export default initialValue => {
const [todos, setTodos] = useState(initialValue);
const [color, setColor] = useState("lightgray");

function saveData(data){
	localStorage.setItem("data", JSON.stringify(data));
	if(color==="lightgray"){setTodos(data);}
	else {
		const Todos = data.filter((el) => el.importance === color);
		setTodos(Todos);
		}
}
return {
	todos,
	filterTodo: color => {
		if(color==="lightgray"){setTodos(initialValue);}
		else {
			const newTodos = initialValue.filter((el) => el.importance === color);
			setTodos(newTodos);
		}
		setColor(color);
	},
	changeImportance: (flagcolor, id) => {
		const updatedTodos = initialValue.map(todo => {
			if (todo.id === id) {
				todo.importance = flagcolor;
			}
			return todo
		});
		saveData(updatedTodos);
	},
	checkTodo: id => {
		const updatedTodos = initialValue.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed
			}
			return todo
		});
		saveData(updatedTodos);
	},
	addTodo: todoText => {
		let newId, l = todos.length;
		if(l===0){newId=0;}
		else{newId = (todos[l-1].id)+1;}
		let newItem = {id: newId, text:todoText, importance:(color==="lightgray")?"gray":color, completed:false};
		setTodos([...todos, newItem]);
		initialValue=initialValue.concat(newItem);
		saveData(initialValue);
	},
	saveTodo: (id, text) => {
		const updatedTodos = initialValue.map(todo => {
			if (todo.id === id) {
				todo.text = text;
			}
			return todo
		});
		saveData(updatedTodos);
	},
	deleteTodo: id => {
		const newTodos = initialValue.filter((el) => el.id !== id);
		saveData(newTodos);
	},
	color: color,
	setColor: setColor
}
}
