import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface CartItem {
  product: {
    id: number;
    name: string;
    price: number;
  };
  quantity: number;
}

const Cart: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);

  return (
    <div>
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item: CartItem) => (
            <div key={item.product.id}>
              <h3>{item.product.name}</h3>
              <p>${item.product.price} x {item.quantity} = ${item.product.price * item.quantity}</p>
            </div>
          ))}
          <p>Total: ${items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)}</p>
        </>
      )}
    </div>
  );
};

export default Cart;





