import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = ({children}) => {
    const signleToy = useLoaderData()
    const {_id, picture, name, price, rating, seller, availableQuantity} = signleToy;
    return (
        <>
        <div>
        <img className='h-80' src={picture} alt="" />
        </div>
        <table className="table table-zebra w-full mb-12">
    {/* head */}
    <tbody>
      {/* row 1 */}
      <tr>
        <th><h3>Name : {name}</h3></th>
      </tr>
      {/* row 2 */}
      <tr>
        <th><p>Rating : {rating}</p></th>
      </tr>
      {/* row 3 */}
      <tr>
        <th><p>Seller :  s{seller}</p></th>

      </tr>
      {/* row 4 */}
      <tr>
        <th><p>Available Quantity : {availableQuantity}</p></th>

      </tr>
      {/* row  5*/}
      <tr>
        <th><p>Seller Name : </p></th>

      </tr>
      {/* row 6 */}
      <tr>
        <th><p>Seller Email :</p></th>

      </tr>
      {/* row 7 */}
      <tr>
        <th><p>Description :</p></th>

      </tr>
    </tbody>
  </table>
        
        </>
)};

export default ToyDetails;