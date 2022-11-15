import { useState } from 'react'

export default function Form(props) {
    const [inputState, setInputState] = useState("");

    function onInputChange(e) {
        setInputState(e.target.value);
    }

    function onFormSubmit(e) {
        e.preventDefault();
        props.onSubmit({text: inputState, completed: false});
        setInputState("");
    }

    return (
        <form>
            <input
                type="text" placeholder='Type here...' className='form-control'
                value={inputState} onChange={onInputChange}
            />
            <button
                className='btn'
                onClick={onFormSubmit}
            >Add</button>
        </form>
    )
}