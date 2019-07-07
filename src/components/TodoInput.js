import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
	const [value, setValue] = useState('');
	return (
	<form onSubmit={e => {
		e.preventDefault();
		addTodo(value);
		setValue('');
		}
	}
	>
	<input type='text'
		placeholder='Add...'
		onChange={e => {setValue(e.target.value);}}
		value={value}
	/>
	<button>Add me</button>
	</form>
	);
}

export default TodoInput;
