import { useState } from 'react'
import Form from './Form';
import TodoItem from './TodoItem';

export default function App() {
	const [TODOS, setTodos] = useState([]);

	function onTodoAdded(todo) {
		setTodos([...TODOS, todo]);
	}

	function onTodoDelete(index) {
		let clone = [...TODOS];
		clone.splice(index, 1);
		setTodos(clone);
	}

	function onTodoComplete(index) {
		let clone = [...TODOS];
		clone[index].completed = !clone[index].completed;
		setTodos(clone);
	}

	return (
		<>
			<main>
				<h3>Todo List:</h3>
				<Form onSubmit={onTodoAdded} />
				<ul className='todo-list'>
					{TODOS.map((todo, index) => {
						return <TodoItem text={todo.text} key={index} index={index}
							onTodoDelete={onTodoDelete} onTodoComplete={onTodoComplete} completed={todo.completed}/>
					})}
				</ul>
			</main>
		</>
	)
}