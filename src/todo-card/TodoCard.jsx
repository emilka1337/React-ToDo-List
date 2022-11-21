import { useContext, useState } from "react";
import { TodosContext } from "../App";
import RemoveCard from "./RemoveCard";
import NewTodoItemForm from "./NewTodoItemForm";
import CardNameEditForm from "./CardNameEditForm";
import TodoList from "./TodoList";
import EditCardName from "./EditName";

export default function TodoCard(props) {
    const [todoCards, setAndSaveTodoCards] = useContext(TodosContext);

    const [nameEditMode, setNameEditMode] = useState(false);

    function onTodoAdded(todo) {
        let clone = [...todoCards];
        clone[props.index].todoList.push(todo);
        setAndSaveTodoCards(clone);
    }

    function onCardRenameButtonClicked() {
        setNameEditMode(!nameEditMode);
    }

    function onCardRenameFormSubmitted(newName) {
        setNameEditMode(false);

        if (!newName.length) return;

        const clone = [...todoCards];
        clone[props.index].name = newName;
        setAndSaveTodoCards(clone);
    }

    function onCardRenameFormCancelled() {
        setNameEditMode(false);
    }

    function onCardRemove() {
        let clone = [...todoCards];
        clone.splice(props.index, 1);
        setAndSaveTodoCards(clone);
    }

    return (
        <div className="todo-card" /*style={{background: props.color}}*/>
            <RemoveCard onClick={onCardRemove} />
            <EditCardName onClick={onCardRenameButtonClicked} />
            {nameEditMode ? (
                <CardNameEditForm
                    currentCardName={props.name}
                    onSubmit={onCardRenameFormSubmitted}
                    onCancel={onCardRenameFormCancelled}
                />
            ) : (
                <h3>{props.name}</h3>
            )}
            <NewTodoItemForm onSubmit={onTodoAdded} />
            <TodoList index={props.index} />
        </div>
    );
}