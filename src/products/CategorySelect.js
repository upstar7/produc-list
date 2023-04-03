function CategorySelect(props) {
    const handleChange = (e) => {
        props.setSelectedCategory(e.target.value);
    };
    return (
        <select
            className="form-select"
            aria-label="Default select example"
            defaultValue=""
            onChange={handleChange}
        >
            <option value="all">All Categories</option>
            {props.categories.map((item, index) => (
                <option value={item} key={index}>
                    {item}
                </option>
            ))}
        </select>
    );
}

export default CategorySelect;
