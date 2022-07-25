import { useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  const cartContent = cartItems.map((item) => (
    <CartItem
      key={item.itemId}
      item={{
        id: item.itemId,
        title: item.title,
        quantity: item.quantity,
        total: item.quantity * item.price,
        price: item.price,
      }}
    />
  ));
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartContent}</ul>
    </Card>
  );
};

export default Cart;
