import React from "react";
import Pizza from "./Pizza";

const Menu = (props) => {
  const pizzaData = props.allData;
  // const pizzaData = [];
  const numPizzas = pizzaData.length;
  return (
    <main className={props.className}>
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stove oven, all organic, all delicious.
          </p>
          <ul className={props.pizzaClassName}>
            {pizzaData.map((pizza) => (
              <Pizza
                pizzaObj={pizza}
                key={pizza.name}
                className={props.elementClassName}
                classNameSoldOut={props.elementSoldOutClassName}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu!</p>
      )}
    </main>
  );
};

export default Menu;
