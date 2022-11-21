import EditNameButton from "./EditNameButton";

export default function CardName(props) {
    function onEditButtonClicked() {
        props.onCardRenameButtonClicked()
    }

    return (
        <h3>
            {props.name}
            <EditNameButton onClick={onEditButtonClicked} />
        </h3>
    );
}
