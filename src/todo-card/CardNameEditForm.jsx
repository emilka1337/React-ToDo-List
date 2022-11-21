import { useState } from "react";

export default function CardNameEditForm(props) {
    const [nameEditInput, setNameEditInput] = useState(props.currentCardName);

    function onNameInputChange(e) {
        setNameEditInput(e.target.value);
    }

    function onFormSubmit(e) {
        e.preventDefault();
        props.onSubmit(nameEditInput);
    }

    function onFormCancel() {
        props.onCancel()
    }

    return (
        <form className="card-name-edit-form" onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="Type card name here"
                className="form-control"
                value={nameEditInput}
                onChange={onNameInputChange}
            />
            <button className="btn">
                <svg viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
            </button>
            <button className="btn" onClick={onFormCancel}>
                <svg viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
            </button>
        </form>
    );
}