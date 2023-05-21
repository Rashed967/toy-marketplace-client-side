import { Link } from "react-router-dom";

const AllToyCard = ({toy}) => {
    const {name, pictureUrl, price, quantity, rating, sellerName, subCategory, _id} = toy
    return (
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-bold">{name}</div>
            </div>
          </div>
        </td>
        <td>{subCategory}</td>
        <td>$ {price}</td>
        <td>{sellerName}</td>
        <td>{quantity}</td>
        <th>
          <Link to={`/viewDetails/${_id}`} className="btn btn-ghost btn-xs">details</Link>
        </th>
      </tr>

    );
};

export default AllToyCard;