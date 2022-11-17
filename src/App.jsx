import { useEffect, useState } from 'react'
import DarkModeToggler from './DarkModeToggler'
import Form from './Form'
import TodoItem from './TodoItem'

export default function App() {
	const [TODOS, setTodos] = useState(JSON.parse(localStorage.getItem("reactTodos")) ?? [])
	const [darkMode, setDarkMode] = useState(localStorage.getItem("reactTodosDarkMode") == "true" ? true : false);

	useEffect(() => {
		localStorage.setItem("reactTodos", JSON.stringify(TODOS))
	});

	function onTodoAdded(todo) {
		setTodos([...TODOS, todo])
	}

	function onTodoDelete(index) {
		let clone = [...TODOS]
		clone.splice(index, 1)
		setTodos(clone)
	}

	function onTodoComplete(index) {
		let clone = [...TODOS]
		clone[index].completed = !clone[index].completed
		setTodos(clone)
	}

	return (
		<div className={darkMode ? "app dark" : "app"}>
			<DarkModeToggler currentMode={darkMode} onClick={setDarkMode} text={darkMode ? "Dark" : "Light"}/>
			<main>
				<h3>Todo</h3>
				<Form onSubmit={onTodoAdded} />
				<ul className='todo-list'>
					{TODOS.map((todo, index) => {
						return <TodoItem text={todo.text} key={index} index={index}
							onTodoDelete={onTodoDelete} onTodoComplete={onTodoComplete} completed={todo.completed} />
					})}
				</ul>
			</main>
		</div>
	)
}