import { useState } from "react";
import Form from "./Form";
import FormToggler from "./FormToggler";

export default function NewTodoCardButtonForm(props) {
    const [formIsOpen, setFormIsOpen] = useState(false);

    function toggleForm() {
        setFormIsOpen(!formIsOpen)
    }

    function onFormSubmit(e) {
        setFormIsOpen(false)
    }

    return formIsOpen ? <Form onSubmit={onFormSubmit} /> : <FormToggler onClick={toggleForm} />
}