import { useState } from 'react';
import Swal from 'sweetalert2'

const MyToyesCard = ({toy}) => {
    const {name, pictureUrl, price, quantity, rating, sellerName, subCategory, _id} = toy
    const [confirm, setConfirm] = useState(null)

    const updateToy = (event, ) => {
        event.preventDefault()
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        fetch(`http://localhost:5000/allToyes/${_id}`, {
            method : "PATCH",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify({price, quantity, details})
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire({
                    icon: 'success',
                    title: 'info has been updated',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        form.reset()
    }

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/allToyes/${id}`, {
                    method : "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        console.log(data)
                        Swal.fire(
                            'Deleted!',
                            'Your data has been deleted.',
                            'success'
                          )
                    }
                    
                })

              
            }
          })

       
    }
    return (
        <>
        <tr>
        <td><img className="h-32 rounded-md w-48" src={pictureUrl} alt="" /></td>
        <td>

        <td>{name}</td>

        </td>
        <td>{subCategory}</td>
        <td>$ {price}</td>
        <td>{sellerName}</td>
        <td>{quantity}</td>
        <td>{rating}</td>
        <th>
          <label htmlFor="my-modal-6" className="btn btn-secondary btn-xs mx-3">Update</label>
          <button onClick={() => handleDelete(_id)} className="btn btn-warning btn-xs">Delete</button>
        </th>
      </tr>
      {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom py-2 w-full mx-auto">
  <div className="modal-box">
  <div className="hero min-h-max ">

<div className="card flex-shrink-0 w-full  max-w-5xl shadow-md bg-base-100">
  <form onSubmit={updateToy} className="card-body ">
    <div className='grid md:grid-cols-2 gap-5 '>

    <div className="form-control">
      <label className="label">
        <span className="label-text">Price</span>
      </label>
      <input type="text" name='price' required placeholder="Price" className="input input-bordered" />
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
      <label htmlFor="my-modal-6" className="btn">Close</label>
    </div>
  </div>
</div>

        </>
    );
};

export default MyToyesCard;