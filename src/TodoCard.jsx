import { useState } from 'react'
import Form from './Form'
import TodoItem from './TodoItem'

export default function TodoCard(props) {
    const [todos, setTodos] = useState([])

    function onTodoAdded(todo) {
        setTodos([...todos, todo])
    }

    function onTodoDelete(index) {
        let clone = [...todos]
        clone.splice(index, 1)
        setTodos(clone)
    }

    function onTodoComplete(index) {
        let clone = [...todos]
        clone[index].completed = !clone[index].completed
        setTodos(clone)
    }

    return (
        <div className="todo-card" /*style={{background: props.color}}*/>
            <h3>{props.name}</h3>
            <Form onSubmit={onTodoAdded} />
            <ul className='todo-list'>
                {todos.map((todo, index) => {
                    return <TodoItem text={todo.text} key={index} index={index}
                        onTodoDelete={onTodoDelete} onTodoComplete={onTodoComplete} completed={todo.completed} />
                })}
            </ul>
        </div>
    )
}