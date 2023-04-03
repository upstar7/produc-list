import Switch from "react-switch";

function SortToggle(props) {
    const handleChange = (e) => {
        props.setIsAscending(e);
    };
    return (
        <>
            <span>Ascending &nbsp;</span>
            <Switch
                onChange={handleChange}
                checked={props.isAscending}
                className="pl-2"
            />
        </>
    );
}

export default SortToggle;
