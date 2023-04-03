function BrandSelect(props) {
    const handleCheck = (v) => (e) => {
        let temp = props.selectedBrands.slice();
        if (e.target.checked) temp.push(v);
        else {
            const removeIndex = temp.indexOf(v);
            temp.splice(removeIndex, 1);
        }
        props.setSelectedBrands(temp);
    };
    return (
        <ul className="list-group list-group-flush rounded">
            <li className="list-group-item">
                <h5 className="mt-1 mb-1">Brands</h5>
                <div className="d-flex flex-column">
                    {props.brands.map((v, i) => {
                        return (
                            <div key={i} className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    // onChange={(e) => handleCheck(e, v)}
                                    onChange={handleCheck(v)}
                                    defaultChecked={true}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                >
                                    {v}
                                </label>
                            </div>
                        );
                    })}
                </div>
            </li>
        </ul>
    );
}

export default BrandSelect;
