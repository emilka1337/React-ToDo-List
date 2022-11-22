export default function TodoItem(props) {
    let liClassName = "todo-list-item";
    props.completed ? (liClassName = liClassName + " completed") : null;
    props.focused ? (liClassName = liClassName + " focused") : null;
    let checkboxClassName = props.completed ? "checkbox checked" : "checkbox";

    function onTodoDelete() {
        props.onTodoDelete(props.index);
    }

    function onTodoComplete() {
        props.onTodoComplete(props.index);
    }

    function setFocus() {
        props.onFocus(props.index);
    }

    function removeFocus() {
        props.onBlur();
    }

    return (
        <li
            className={liClassName}
            onMouseOver={setFocus}
            onMouseOut={removeFocus}
        >
            <div className="list-item-left" onClick={onTodoComplete}>
                <div className={checkboxClassName}></div>
                <p>{props.text}</p>
            </div>
            <button onClick={onTodoDelete}>
                <svg viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
            </button>
        </li>
    );
}
