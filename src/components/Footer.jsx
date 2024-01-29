import React from "react";

export const Footer = (props) => {
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;

  const isOpen = hour >= openHours && hour <= closeHours;
  console.log(isOpen);

  // if (!isOpen)
  //   return (
  //     <footer className={props.className}>
  //       We are happy to welcome you during our openHours - {openHours}:00 to{" "}
  //       {closeHours}:00
  //     </footer>
  //   );
  return (
    <footer className={props.className}>
      {isOpen ? (
        <div className={props.className2}>
          <p>
            {" "}
            We're open until {closeHours}:00. Come visit us or order online.
          </p>{" "}
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We're happy to welcome you during our open hours - {openHours}:00 to{" "}
          {closeHours}:00{" "}
        </p>
      )}
    </footer>
  );
};
