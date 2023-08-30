import React from 'react'
import '../styles/Menu.css'

function MenuItem({image,name,content,price}) {
  return (
    <div className="menuItem">
      <img src={image} alt="Burger" />
      <h1 className="menuTitle">{name}</h1>
      <h6>{content}</h6>
      <p>{price} TL</p>
      <button className="cardBtn">Satın Al</button>
    </div>
  )
}

export default MenuItem;