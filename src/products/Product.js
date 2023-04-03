import Carousel from "react-grid-carousel";
import Ratings from "react-ratings-declarative";
import { useState } from "react";

const iconPath =
    "M18.571 7.221c0 0.201-0.145 0.391-0.29 0.536l-4.051 3.951 0.96 5.58c0.011 0.078 0.011 0.145 0.011 0.223 0 0.29-0.134 0.558-0.458 0.558-0.156 0-0.313-0.056-0.446-0.134l-5.011-2.634-5.011 2.634c-0.145 0.078-0.29 0.134-0.446 0.134-0.324 0-0.469-0.268-0.469-0.558 0-0.078 0.011-0.145 0.022-0.223l0.96-5.58-4.063-3.951c-0.134-0.145-0.279-0.335-0.279-0.536 0-0.335 0.346-0.469 0.625-0.513l5.603-0.815 2.511-5.078c0.1-0.212 0.29-0.458 0.547-0.458s0.446 0.246 0.547 0.458l2.511 5.078 5.603 0.815c0.268 0.045 0.625 0.179 0.625 0.513z";

function Product(props) {
    const [isHover, setIsHover] = useState(false);
    const { product } = props;
    let percentOff;

    if (product.stock < 20) {
        percentOff = (
            <div
                className="badge bg-dim py-2 text-white position-absolute"
                style={{ top: "0.5rem", right: "0.5rem", zIndex: 10 }}
            >
                below 20
            </div>
        );
    }

    return (
        <div className="col">
            <div className="card shadow-sm">
                <div
                    onMouseOver={() => setIsHover(true)}
                    onMouseOut={() => setIsHover(false)}
                >
                    {percentOff}
                    <Carousel hideArrow={!isHover} showDots>
                        {product.images.map((img, i) => (
                            <Carousel.Item key={i}>
                                <img
                                    src={img}
                                    width="100%"
                                    height="200px"
                                    alt={product.title}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center text-dark text-truncate">
                        {product.title}
                    </h5>
                    <p className="card-text text-center text-muted mb-0">
                        Brand: {product.brand}
                    </p>
                    <p className="card-text text-center text-muted mb-0">
                        Category: {product.category}
                    </p>
                    <p className="card-text text-center text-muted mb-0">
                        In Stock: {product.stock}
                    </p>
                    <div className="card-text text-center text-muted mb-0">
                        <Ratings
                            rating={product.rating}
                            widgetRatedColors="rgb(253, 204, 13)"
                            // changeRating={changeRating}
                            widgetSpacings="2px"
                        >
                            {Array.from({ length: 5 }, (_, i) => {
                                return (
                                    <Ratings.Widget
                                        key={i}
                                        widgetDimension="20px"
                                        svgIconViewBox="0 0 19 20"
                                        svgIconPath={iconPath}
                                        widgetHoverColor="rgb(253, 204, 13)"
                                    />
                                );
                            })}
                        </Ratings>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
