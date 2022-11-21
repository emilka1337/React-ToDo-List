import { useEffect, useRef, useState } from "react";

export default function NewTodoItemForm(props) {
    const [inputState, setInputState] = useState("");

    const newTodoInput = useRef();

    useEffect(() => newTodoInput.current.focus(), []);

    function onInputChange(e) {
        setInputState(e.target.value);
    }

    function onFormSubmit(e) {
        e.preventDefault();
        if (inputState.trim().length > 0) {
            newTodoInput.current.focus();
            props.onSubmit({ text: inputState, completed: false });
            setInputState("");
        }
    }

    return (
        <form>
            <input
                type="text"
                placeholder="Type here..."
                className="form-control"
                ref={newTodoInput}
                value={inputState}
                onChange={onInputChange}
            />
            <button className="btn" onClick={onFormSubmit}>
                Add
            </button>
        </form>
    );
}