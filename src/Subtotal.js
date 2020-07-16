import React from "react";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";
import { getBasketTotal } from "./reducer";

const Subtotal = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <p>
        <strong>Subtotal {basket?.length} items: </strong>
        <strong>${getBasketTotal(basket)}</strong>
      </p>
      <input type="checkbox" />
      <span>This order contains a gift</span>
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
