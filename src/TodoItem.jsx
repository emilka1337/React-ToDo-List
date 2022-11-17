export default function TodoItem(props) {
    function onTodoDelete() {
        props.onTodoDelete(props.index)
    }

    function onTodoComplete() {
        props.onTodoComplete(props.index)
    }

    return (
        <li className={props.completed ? 'todo-list-item completed' : 'todo-list-item'}>
            <div className="list-item-left" onClick={onTodoComplete}>
                <div className={props.completed ? "checkbox checked" : "checkbox"}></div>
                <p>{props.text}</p>
            </div>
            <button onClick={onTodoDelete}>
                <svg viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
            </button>
        </li>
    )
}