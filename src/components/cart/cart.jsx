import Button from "../button/button";
import { totalPrice } from "../units/total-price";
import "./cart.css";

const Cart = ({ cartItems, onCheckout }) => {
  return (
    <div className="cart_container">
      <p>
        Umumiy narx:{" "}
        {totalPrice(cartItems).toLocaleString("en-Us", {
          style: "currency",
          currency: "USD",
        })}
      </p>

      <Button
        title={` ${cartItems.length === 0 ? "Buyurtma berish" : "To'lov"} `}
        disable={cartItems.length === 0 ? true : false}
        type={"checkout"}
        onClick={onCheckout}
      />
    </div>
  );
};

export default Cart;
