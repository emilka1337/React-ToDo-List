export default function DarkModeToggler(props) {
    function toggleMode() {
        localStorage.setItem("reactTodosDarkMode", !props.currentMode)
        props.onClick(!props.currentMode)
    }

    return (
        <button className={props.currentMode ? 'btn btn-dark dark-mode-toggler' : 'btn btn-light dark-mode-toggler'}
            onClick={toggleMode}
        >{props.text}</button>
    )
}