function Pagination(props) {
    const { page, pageSize, setPage, setPageSize } = props;
    const handleChange = (e) => {
        setPageSize(e.target.value);
        setPage(1);
    };
    const handlePrev = () => setPage(page - 1);
    const handleNext = () => setPage(page + 1);
    const handleClick = (num) => (e) => setPage(num);
    return (
        <>
            <span className="text-muted small d-none d-md-inline">Showing</span>
            <select
                className="form-select mx-2"
                style={{ width: 80 }}
                aria-label="Default select example"
                defaultValue={5}
                onChange={handleChange}
            >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={30}>all</option>
            </select>
            <span className="text-muted small d-none d-md-inline">of 30</span>

            <nav aria-label="Page navigation example" className="ms-auto">
                <ul className="pagination my-0">
                    {page > 1 && (
                        <li className="page-item" onClick={handlePrev}>
                            <a className="page-link">Previous</a>
                        </li>
                    )}
                    {Array.from({ length: 3 }, (_, i) => {
                        return (
                            page + i - 1 > 0 &&
                            page + i - 1 <= 30 / pageSize && (
                                <li
                                    className={
                                        i == 1
                                            ? "page-item active"
                                            : "page-item"
                                    }
                                    onClick={handleClick(page + i - 1)}
                                    key={i}
                                >
                                    <a className="page-link">{page + i - 1}</a>
                                </li>
                            )
                        );
                    })}
                    {page < 30 / pageSize && (
                        <li className="page-item" onClick={handleNext}>
                            <a className="page-link">Next</a>
                        </li>
                    )}
                </ul>
            </nav>
        </>
    );
}

export default Pagination;
