import { useEffect, useState } from "react";
import AllToyCard from "../../components/AllToyCard/AllToyCard";


const AllToyes = () => {
    const [allToyes, setAllToyes] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allToyes')
        .then(res => res.json())
        .then(data => {
            setAllToyes(data)
        })
    }, [])
    return (
        <div className="mt-14">   
            <table className="table w-full ">
    {/* head */}
    <thead>
      <tr>
        <th>name</th>
        <th>Sub-category</th>
        <th>Price</th>
        <th>Seller</th>
        <th>Available quantity</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

    {
            allToyes.map(toy => <AllToyCard
            key={toy._id}
            toy={toy}
            ></AllToyCard>)
           }

    </tbody>

    
  </table>
           

        </div>
    );
};

export default AllToyes;