
const AllToyCard = ({toy}) => {
    const {name, pictureUrl, price, quantity, rating, sellerName, subCategory, _id} = toy
    console.log(name, pictureUrl, price, quantity, rating, sellerName, subCategory, _id)
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
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>

    );
};

export default AllToyCard;