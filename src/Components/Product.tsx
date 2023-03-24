import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Grid, Typography, Paper, Button } from "@mui/material";

interface ProductProps {
  product: { id: number; name: string; price: number };
  onAddToCart: (product: any) => void;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductProps {
  product: Product;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ product }));
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      {/* <button onClick={handleAddToCart}>Add to Cart</button> */}
      <Button
        onClick={handleAddToCart} // Call the handleAddToCart function when the button is clicked
        variant="contained"
        color="secondary"
        className="px-1 text-sm text-blue-100 bg-blue-500 rounded shadow h-10"
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default Product;
