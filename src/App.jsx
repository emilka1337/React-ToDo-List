import React, { useEffect, useState } from 'react'
import DarkModeToggler from './DarkModeToggler'
import TodoCard from './todo-card/TodoCard'
import NewTodoCardButtonForm from './new-todo-card/NewTodoCardButtonForm'

export const TodosContext = React.createContext();

export function App() {
	const [darkMode, setDarkMode] = useState(setDarkThemeOnStart());
	const [todoCards, setTodoCards] = useState(JSON.parse(localStorage.getItem("reactTodos")) ?? []);

	useEffect(() => {
		localStorage.setItem("reactTodos", JSON.stringify(todoCards))
	});

	function setDarkThemeOnStart() {
		let defaultDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches

		if (localStorage.getItem("reactTodosDarkMode")) {
			if (localStorage.getItem("reactTodosDarkMode") == "true") return true
			else return false
		} else return defaultDarkTheme
	}

	function setAndSaveTodoCards(todoCards) {
		setTodoCards(todoCards)
		localStorage.setItem("reactTodos", JSON.stringify(todoCards))
	}

	return (
		<div className={darkMode ? "app dark" : "app"}>
			<TodosContext.Provider value={[todoCards, setAndSaveTodoCards]}>
				<header>
					<NewTodoCardButtonForm />
					<DarkModeToggler currentMode={darkMode} onClick={setDarkMode} text={darkMode ? "Dark" : "Light"} />
				</header>
				<main>
					{
						todoCards.length == 0 ? <h1>Click "+" to add new list</h1> :
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
			</TodosContext.Provider>
		</div>
	)
}