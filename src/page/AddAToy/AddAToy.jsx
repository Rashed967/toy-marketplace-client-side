import Swal from 'sweetalert2'

const AddAToy = () => {

    const AddToyHandler = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const pictureUrl = form.picURL.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.email.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const newToy = {
            name,
            pictureUrl,
            sellerName,
            sellerEmail,
            subCategory,
            price,
            rating,
            quantity,
            details
        }
        fetch('http://localhost:5000/addAToy',{
            method : "POST",
            headers : {
                'content-type' : "application/json"
            },
            body : JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId > 1){
                console.log(data)
               return Swal.fire({
                    icon: 'success',
                    title: 'Toy added successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            
        })
        form.reset()

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
        </>
    );
};

export default AddAToy;