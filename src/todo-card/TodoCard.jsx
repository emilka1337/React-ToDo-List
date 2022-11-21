import { useContext } from 'react'
import { TodosContext } from '../App'
import RemoveCard from './RemoveCard'
import Form from '../Form'
import TodoItem from './TodoItem'

export default function TodoCard(props) {
    const [todoCards, setAndSaveTodoCards] = useContext(TodosContext)

    function onTodoAdded(todo) {
        let clone = [...todoCards];
        clone[props.index].todoList.push(todo);
        setAndSaveTodoCards(clone);
    }

    function onTodoDelete(index) {
        let clone = [...todoCards];
        clone[props.index].todoList.splice(index, 1)
        setAndSaveTodoCards(clone);
    }

    function onTodoComplete(index) {
        let clone = [...todoCards];
        clone[props.index].todoList[index].completed = !clone[props.index].todoList[index].completed;
        setAndSaveTodoCards(clone);
    }

    function onCardRemove() {
        let clone = [...todoCards]
        clone.splice(props.index, 1)
        setAndSaveTodoCards(clone)
    }

    return (
        <div className="todo-card" /*style={{background: props.color}}*/>
            <RemoveCard onClick={onCardRemove} />
            <h3>{props.name}</h3>
            <Form onSubmit={onTodoAdded} />
            <ul className='todo-list'>
                {todoCards[props.index].todoList.map((todo, index) => {
                    return <TodoItem text={todo.text} key={index} index={index}
                        onTodoDelete={onTodoDelete} onTodoComplete={onTodoComplete} completed={todo.completed} />
                })}
            </ul>
        </div>
    )
}