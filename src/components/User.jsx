import React from 'react';

function User({ user }) {
  const { _id, name, productionTime, guarantee, payment, price } = user;
  return (
    <div className="user">
      <h2 className="user__title">{name}</h2>
      <ul className="user__text-container">
        <li className="user__text">-</li>
        <li className="user__text">{productionTime}</li>
        <li className="user__text">{guarantee}</li>
        <li className="user__text">{payment}</li>
        <li className="user__text">{price}</li>
      </ul>
    </div>
  );
}

export default User;
