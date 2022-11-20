import { useState } from "react";

class Card {
    todoList = []

    constructor(name, color) {
        this.name = name
        this.color = color
    }
}

export default function NewTodoCardButtonForm(props) {
    const [formIsOpen, setFormIsOpen] = useState(false);
    const [newCardName, setNewCardName] = useState("");
    const [newCardColor, setNewCardColor] = useState("#343434");

    function onCardNameChange(e) {
        setNewCardName(e.target.value)
    }
    
    function onCardColorChange(e) {
        setNewCardColor(e.target.value)
    }

    function onFormSubmit(e) {
        e.preventDefault()
        props.onSubmit(new Card(newCardName, newCardColor))
        setNewCardName("")
        setNewCardColor("#343434")
        setFormIsOpen(false)
    }

    function toggleForm() {
        setFormIsOpen(!formIsOpen)
    }

    if (!formIsOpen) {
        return (
            <button className="btn btn-primary toggle-new-todo-card-form" onClick={toggleForm}>
                <svg viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                </svg>
            </button>
        )
    } else {
        return (
            <form className="new-todo-card-form" onSubmit={onFormSubmit}>
                <label htmlFor="new-todo-card-name">Name:</label>
                <input type="text" id="new-todo-card-name" value={newCardName} onChange={onCardNameChange} />
                <label htmlFor="new-todo-card-color">Color:</label>
                <input type="color" id="new-todo-card-color" value={newCardColor} onChange={onCardColorChange} />
                <button className="btn btn-primary">
                    <p>Create new card</p>
                    <svg viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                    </svg>
                </button>
            </form>
        )
    }
}