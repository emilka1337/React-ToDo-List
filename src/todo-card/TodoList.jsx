import { useContext } from "react";
import { TodosContext } from "../App";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
    const [todoCards, setAndSaveTodoCards] = useContext(TodosContext);

    function onTodoDelete(index) {
        let clone = [...todoCards];
        clone[props.index].todoList.splice(index, 1);
        setAndSaveTodoCards(clone);
    }

    function onTodoComplete(index) {
        let clone = [...todoCards];
        clone[props.index].todoList[index].completed =
            !clone[props.index].todoList[index].completed;
        setAndSaveTodoCards(clone);
    }

    return (
        <ul className="todo-list">
            {todoCards[props.index].todoList.map((todo, index) => {
                return (
                    <TodoItem
                        text={todo.text}
                        key={index}
                        index={index}
                        completed={todo.completed}
                        onTodoDelete={onTodoDelete}
                        onTodoComplete={onTodoComplete}
                    />
                );
            })}
        </ul>
    );
}