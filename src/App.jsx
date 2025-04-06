import "./App.css";
import { getData } from "./constants/db";
import Card from "./components/card/card";
import Cart from "./components/cart/cart";
import { useEffect, useState } from "react";

const courses = getData();

const telegram = window.Telegram.WebApp;

const App = () => {
  const [cartItems, setCartItimes] = useState([]);

  useEffect(() => {
    telegram.ready();
  });

  const onAddItem = (item) => {
    const exitItem = cartItems.find((c) => c.id == item.id);
    console.log("Exist_item", exitItem);

    if (exitItem) {
      const newData = cartItems.map((c) =>
        c.id == item.id ? { ...exitItem, quantity: exitItem.quantity + 1 } : c
      );

      setCartItimes(newData);
    } else {
      const newData = [...cartItems, { ...item, quantity: 1 }];
      setCartItimes(newData);
    }
  };

  const onRemoveItem = (item) => {
    const exitItem = cartItems.find((c) => c.id == item.id);

    if (exitItem.quantity === 1) {
      const newData = cartItems.filter((c) => c.id == exitItem.id);
      setCartItimes(newData);
    } else {
      const newData = cartItems.map((c) =>
        c.id !== exitItem.id
          ? { ...exitItem, quantity: exitItem.quantity - 1 }
          : c
      );
      setCartItimes(newData);
    }
  };

  const onCheckout = () => {
    telegram.MainButton.text = "Sotil olish :)";
    telegram.MainButton.show();
  };

  return (
    <>
      <h1 className="heading">Saonbek kurslar</h1>
      <Cart cartItems={cartItems} onCheckout = {onCheckout} />
      <div className="card_container">
        {courses.map((course) => (
          <Card
            key={course.id}
            course={course}
            onAddItem={onAddItem}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </div>
    </>
  );
};

export default App;
