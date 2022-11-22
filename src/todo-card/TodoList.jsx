import { useContext, useState } from "react";
import { TodosContext } from "../App";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
    const [todoCards, setAndSaveTodoCards] = useContext(TodosContext);
    const [focusedItem, setFocusedItem] = useState()

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

    function setFocus(index) {
        setFocusedItem(index)
    }

    function removeFocus() {
        setFocusedItem(null)
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
                        onFocus={setFocus}
                        onBlur={removeFocus}
                        focused={index == focusedItem}
                    />
                );
            })}
        </ul>
    );
}