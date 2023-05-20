

const AddAToy = () => {

    const AddToyHandler = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const pictureUrl = form.picURL.value;
        const sellerName = form.sellerName.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        

    }
    return (
        <>
        <h2 className="font-medium underline py-7 rounded-md text-center text-3xl bg-warning">Add a Toy to website</h2>
            <div className="hero min-h-screen p-8 bg-base-200">

    <div className="card flex-shrink-0 w-full  max-w-5xl shadow-md bg-base-100">
      <form onSubmit={AddToyHandler} className="card-body ">
        <div className='grid md:grid-cols-2 gap-5 '>
        <div className="form-control text-white">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Picture URL</span>
          </label>
          <input type="text" name='picURL' placeholder="Picture URL" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input type="text" name='sellerName' placeholder="Seller Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Sub Category</span>
          </label>
          <input type="text" name='subCategory' placeholder="Sub Category" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name='price' placeholder="Price" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" name='rating' placeholder="Rating" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="text" name='details' placeholder="Details" className="input input-bordered" />
        </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>

</div>
        </>
    );
};

export default AddAToy;