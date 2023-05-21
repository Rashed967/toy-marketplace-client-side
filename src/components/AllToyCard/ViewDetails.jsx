import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContex } from '../../providers/AuthProviders';

const ViewDetails = () => {
    const toy = useLoaderData()
    const {user} = useContext(AuthContex)
    const {name, pictureUrl, price, quantity, rating, sellerName, subCategory, _id, details} = toy

    return (
        <>
        <div>
        <img className='h-80' src={pictureUrl} alt="" />
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
        <th><p>Seller email : {user?.email}</p></th>

      </tr>
      {/* row 4 */}
      <tr>
        <th><p>Available Quantity : {quantity}</p></th>

      </tr>
      {/* row  5*/}
      <tr>
        <th><p>Seller Name : {sellerName}</p></th>

      </tr>
      {/* row 6 */}
      <tr>
        <th><p>subCategory : {subCategory}</p></th>

      </tr>
      {/* row 7 */}
      <tr>
        <th><p>Description : {details}</p></th>

      </tr>
    </tbody>
  </table>
        
        </>
    );
};

export default ViewDetails;