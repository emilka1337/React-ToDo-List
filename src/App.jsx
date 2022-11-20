import { useEffect, useState } from 'react'
import DarkModeToggler from './DarkModeToggler'
import TodoCard from './TodoCard'
import NewTodoCardButtonForm from './new-todo-card/NewTodoCardButtonForm'

const fakeTodoCards = [
	{
		name: "Покупки",
		color: "magenta",
		todoList: [
			[{ "text": "Сходить за хлебом", "completed": false },
			{ "text": "Запастить молоком", "completed": false },
			{ "text": "Купить сыр", "completed": false },
			{ "text": "Съесть хомяка", "completed": false }]
		]
	},
	{
		name: "Домашка",
		color: "crimson",
		todoList: [
			[{ "text": "Сходить за хлебом", "completed": false },
			{ "text": "Запастить молоком", "completed": false },
			{ "text": "Купить сыр", "completed": false },
			{ "text": "Съесть хомяка", "completed": false }]
		]
	},
]

export default function App() {
	const [darkMode, setDarkMode] = useState(setDarkThemeOnStart());
	const [todoCards, setTodoCards] = useState(JSON.parse(localStorage.getItem("reactTodos")) ?? []);

	// useEffect(() => {
	// 	localStorage.setItem("reactTodos", JSON.stringify(todoCards))
	// });

	function setDarkThemeOnStart() {
		let defaultDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
		return localStorage.getItem("reactTodosDarkMode") == "true" ? true : defaultDarkTheme
	}

	function onNewTodoCardSubmit(formData) {
		console.log(formData)
		setTodoCards([...todoCards, formData])
	}

	return (
		<div className={darkMode ? "app dark" : "app"}>
			<header>
				<NewTodoCardButtonForm onSubmit={onNewTodoCardSubmit} />
				<DarkModeToggler currentMode={darkMode} onClick={setDarkMode} text={darkMode ? "Dark" : "Light"} />
			</header>
			<main>
				{
					todoCards.map((todoCard, index) => {
						return <TodoCard
							name={todoCard.name}
							color={todoCard.color}
							todoList={todoCard.todoList}
							key={index}
							index={index}
						/>
					})
				}
			</main>
		</div>
	)
}