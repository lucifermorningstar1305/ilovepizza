import React from 'react'
import Pizza from './Pizza'



const Menu = (props) => {
  const data = [...props.allData]
  console.log(data)
  return (
    <main className={props.className}>
      <h2>Our Menu</h2>
      <Pizza name={data[0].name} ingredients={data[0].ingredients} price={data[0].price} photoName={data[0].photoName} soldOut={data[0].soldOut}/>
      <Pizza name={data[1].name} ingredients={data[1].ingredients} price={data[0].price} photoName={data[1].photoName} soldOut={data[1].soldOut}/>
      <Pizza name={data[2].name} ingredients={data[2].ingredients} price={data[0].price} photoName={data[2].photoName} soldOut={data[2].soldOut}/>
      <Pizza name={data[3].name} ingredients={data[3].ingredients} price={data[0].price} photoName={data[3].photoName} soldOut={data[3].soldOut}/>
      <Pizza name={data[4].name} ingredients={data[4].ingredients} price={data[0].price} photoName={data[4].photoName} soldOut={data[4].soldOut}/>
      <Pizza name={data[5].name} ingredients={data[5].ingredients} price={data[0].price} photoName={data[5].photoName} soldOut={data[5].soldOut}/>
    </main>
  )
}

export default Menu