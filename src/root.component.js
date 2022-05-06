import { BrowserRouter } from "react-router-dom";
import { ProductsHistory } from "./components/ProductsHistory";

export default function Root(props) {
  return (
    <BrowserRouter>
      <ProductsHistory />
    </BrowserRouter>
  );
}
