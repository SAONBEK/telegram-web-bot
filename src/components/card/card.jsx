import { useState } from "react";
import Button from "../button/button";
import "./card.css";

const Card = (props) => {
  const [count, setCount] = useState(0);
  const { course, onAddItem, onRemoveItem } = props;

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    onAddItem(course);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
    onRemoveItem(course);
  };

  return (
    <div className="card">
      <span className={`${count !== 0 ? "card_badge" : "card_badge-hidden"}`}>
        {count}
      </span>

      <div className="image_container">
        <img
          src={course.Image}
          alt={course.title}
          width={"100%"}
          height={"230px"}
        />
      </div>

      <div className="card_body">
        <h2 className="card_title">{course.title}</h2>
        <div className="card-price">
          {course.price.toLocaleString("en-Us", {
            style: "currency",
            currency: "USD",
          })}
        </div>
      </div>

      <div className="hr"></div>

      <div className="btn_container">
        <Button title={"+"} onClick={handleIncrement} type={"add"} />
        {count !== 0 && (
          <Button title={"-"} onClick={handleDecrement} type={"remove"} />
        )}
      </div>
    </div>
  );
};

export default Card;
