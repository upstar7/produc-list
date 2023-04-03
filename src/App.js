import Template from "./template/Template";
import { Switch, Route } from "react-router-dom";
import ProductList from "./products/ProductList";

function App() {
    return (
        <Template>
            <Switch>
                <Route path="/">
                    <ProductList />
                </Route>
                <Route path="/products" exact>
                    <ProductList />
                </Route>
            </Switch>
        </Template>
    );
}

export default App;
