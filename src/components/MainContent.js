import React from "react"
import Sprite from "./icons/sprite"
import TodoInput from "./TodoInput";
import todosData from "./todosData"
import TodoItem from "./TodoItem"
import useTodoState from "./useTodoState"
import FilterDropdown from "./FilterDropdown"

function MainContent(){
	let data;
	if(localStorage.getItem("data")){data=JSON.parse(localStorage.getItem("data"))}
	else{localStorage.setItem("data", JSON.stringify(todosData)); data=todosData}

	const { todos, filterTodo, changeImportance, checkTodo, addTodo, saveTodo, deleteTodo, color} = useTodoState(data);

	const todoItems = todos.map(item => <TodoItem key={item.id} item={item} changeImportance={changeImportance} handleChange={checkTodo} saveTodo={saveTodo} deleteTodo={deleteTodo} />);

	return (
		<div className="todo-list">
			<Sprite/>
			<TodoInput addTodo={todoText => {
				const trimmedText = todoText.trim();
				if (trimmedText.length > 0) {addTodo(trimmedText);}
			}}/>
			<FilterDropdown color={color} change={filterTodo}/>
			{todoItems}
		</div>
	)
}

export default MainContent
/*
class MainContent extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: todosData
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(id){
		this.setState(prevState => {
		const updatedTodos = prevState.todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed
			}
			return todo
		})
		return {
			todos: updatedTodos
		}
	});
	}

	addItem() {
		let l = this.state.todos.length;
		let inputDo = document.getElementsByTagName('input')[0];
		let newId;
		if(l===0){newId=0;}
		else{newId = (this.state.todos[l-1].id)+1;}
		let newItem = {id: newId, text:inputDo.value, completed:false};
		//this.setState({todos: [...this.state.todos, newItem]});
		this.setState(prevState => {return {todos: [...prevState.todos, newItem]}})
	}

	render() {
		const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} deleteTodo={todoIndex => {
					const newTodos = this.state.todos.filter((el) => el.id !== item.id);
		console.log(newTodos);
					this.setState({todos:newTodos});}
					}/>)
		return (
			<div className="todo-list">
				<TodoInput saveTodo={todoText => {
					const trimmedText = todoText.trim();
					if (trimmedText.length > 0) {this.addItem(trimmedText);}
				}}/>
				{todoItems}
			</div>
		)
	}
}
*/
