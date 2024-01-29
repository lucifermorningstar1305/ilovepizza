import React from "react";

const Pizza = (props) => {
  const pizza_details = { ...props.pizzaObj };
  console.log(pizza_details);

  return (
    <li
      className={
        pizza_details.soldOut ? props.classNameSoldOut : props.className
      }
    >
      <img src={pizza_details.photoName} alt={pizza_details.name} />
      <div>
        <h3>{pizza_details.name}</h3>
        <p>{pizza_details.ingredients}</p>
        <span>{pizza_details.soldOut ? "SOLD OUT" : pizza_details.price}</span>
      </div>
    </li>
  );
};

export default Pizza;
