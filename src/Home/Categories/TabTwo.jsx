import React from 'react';

const TabTwo = ({game}) => {
    const {_id, picture, name, price, rating} = game
    return (
        <div>
            <div className="card w-96 bg-primary text-white shadow-xl">
  <figure><img className="h-80" src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Price : ${price}</p>
    <p>Rating : {rating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-accent">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default TabTwo;