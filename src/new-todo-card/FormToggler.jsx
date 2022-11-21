export default function FormToggler(props) {
    function onClick() {
        props.onClick()
    }

    return (
        <button className="btn toggle-new-todo-card-form" onClick={onClick}>
            <svg viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
            </svg>
        </button>
    )
}