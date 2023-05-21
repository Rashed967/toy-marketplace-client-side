

const MyToyesCard = ({toy}) => {
    const {name, pictureUrl, price, quantity, rating, sellerName, subCategory, _id} = toy
    return (
        <>
        <tr>
        <td><img className="h-32 rounded-md w-48" src={pictureUrl} alt="" /></td>
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
        <td>{rating}</td>
        <th>
          <label htmlFor="my-modal-6" className="btn btn-secondary btn-xs mx-3">Update</label>
          <button className="btn btn-warning btn-xs">Delete</button>
        </th>
      </tr>
      {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom py-2 w-full mx-auto">
  <div className="modal-box">
  <div className="hero min-h-max ">

<div className="card flex-shrink-0 w-full  max-w-5xl shadow-md bg-base-100">
  <form className="card-body ">
    <div className='grid md:grid-cols-2 gap-5 '>
    <div className="form-control text-white">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" name="name" required placeholder="Name" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Picture URL</span>
      </label>
      <input type="text" name='picURL' required placeholder="Picture URL" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Seller Name</span>
      </label>
      <input type="text" name='sellerName' required placeholder="Seller Name" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Seller Email</span>
      </label>
      <input type="email" name='email' required placeholder="Seller Name" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Sub Category</span>
      </label>
      <input type="text" name='subCategory' required placeholder="Sub Category" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Price</span>
      </label>
      <input type="text" name='price' required placeholder="Price" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Rating</span>
      </label>
      <input type="text" name='rating' required placeholder="Rating" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Available Quantity</span>
      </label>
      <input type="text" name='quantity' required placeholder="Available Quantity" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Details</span>
      </label>
      <input type="text" name='details' required placeholder="Details" className="input input-bordered" />
    </div>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Add the toy</button>
    </div>
  </form>
</div>

</div>
    <div className="modal-action">
      <label htmlFor="my-modal-6" className="btn">Yay!</label>
    </div>
  </div>
</div>
        </>
    );
};

export default MyToyesCard;