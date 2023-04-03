import { Link } from "react-router-dom";
import Product from "./Product";
import { useState } from "react";
import ScrollToTopOnMount from "../template/ScrollToTopOnMount";
import BrandSelect from "./BrandSelect";
import CategorySelect from "./CategorySelect";
import SortToggle from "./SortToggle";
import Pagination from "./Pagination";
import data from "../data/data";

const { categories, brands, products } = data;

function ProductList() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedBrands, setSelectedBrands] = useState(brands);
    const [isAscending, setIsAscending] = useState(true);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    const findProducts = (products) => {
        let temp = products.slice();
        if (selectedCategory !== "all")
            temp = temp.filter((item) => item.category === selectedCategory);
        temp = temp.filter((item) => selectedBrands.includes(item.brand));
        if (isAscending) temp = temp.sort().reverse();
        else temp.sort().sort();
        return temp.slice((page - 1) * pageSize, page * pageSize);
    };
    console.log("PS", pageSize, page);
    return (
        <div className="container mt-5 py-4 px-xl-5">
            <ScrollToTopOnMount />
            <nav aria-label="breadcrumb" className="bg-custom-light rounded">
                <ol className="breadcrumb p-3 mb-0">
                    <li className="breadcrumb-item">
                        <Link
                            className="text-decoration-none link-secondary"
                            to="/products"
                            replace
                        >
                            All Products
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Products
                    </li>
                </ol>
            </nav>

            <div className="h-scroller d-block d-lg-none">
                <nav className="nav h-underline">
                    {categories.map((v, i) => {
                        return (
                            <div key={i} className="h-link me-2">
                                <Link
                                    to="/products"
                                    className="btn btn-sm btn-outline-dark rounded-pill"
                                    replace
                                >
                                    {v}
                                </Link>
                            </div>
                        );
                    })}
                </nav>
            </div>

            <div className="row mb-3 d-block d-lg-none">
                <div className="col-12">
                    <div id="accordionFilter" className="accordion shadow-sm">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button
                                    className="accordion-button fw-bold collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFilter"
                                    aria-expanded="false"
                                    aria-controls="collapseFilter"
                                >
                                    Filter By Brands
                                </button>
                            </h2>
                        </div>
                        <div
                            id="collapseFilter"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFilter"
                        >
                            <div className="accordion-body p-0">
                                <BrandSelect
                                    brands={brands}
                                    selectedBrands={selectedBrands}
                                    setSelectedBrands={setSelectedBrands}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-4 mt-lg-3">
                <div className="d-none d-lg-block col-lg-3">
                    <div className="border rounded shadow-sm">
                        <BrandSelect
                            brands={brands}
                            selectedBrands={selectedBrands}
                            setSelectedBrands={setSelectedBrands}
                        />
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="d-flex flex-column h-100">
                        <div className="row align-items-center">
                            <div className="col-lg-3 d-lg-block mb-3">
                                <CategorySelect
                                    categories={categories}
                                    setSelectedCategory={setSelectedCategory}
                                />
                            </div>

                            <div className="col-lg-9 col-xl-5 offset-xl-4 d-flex flex-row justify-content-start justify-content-md-end mb-3">
                                <SortToggle
                                    setIsAscending={setIsAscending}
                                    isAscending={isAscending}
                                />
                            </div>
                        </div>
                        <div
                            className={
                                "row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3 mb-4 flex-shrink-0 row-cols-xl-3"
                            }
                        >
                            {findProducts(products).map((item) => {
                                return <Product key={item.id} product={item} />;
                            })}
                        </div>
                        <div className="d-flex align-items-center mt-auto">
                            <Pagination
                                page={page}
                                pageSize={pageSize}
                                setPage={setPage}
                                setPageSize={setPageSize}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
