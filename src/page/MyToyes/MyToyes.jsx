import { useEffect, useState } from "react";
import MyToyesCard from "../../components/AllToyCard/MyToyesCard/MyToyesCard";

const MyToyes = () => {
    const [myToyes, setMyToyes] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myToyes?email=Rashed@fdf.com`)
        .then(res =>  res.json())
        .then(data => {
            setMyToyes(data)
        })
    },[])
    return (
        <div className="mt-14">   
            <table className="table w-full ">
    {/* head */}
    <thead>
      <tr>
        <th>image</th>
        <th>name</th>
        <th>Sub-category</th>
        <th>Price</th>
        <th>Seller</th>
        <th> quantity</th>
        <th>Rating</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
            myToyes.map(toy => <MyToyesCard
            key={toy._id}
            toy={toy}
            ></MyToyesCard>)
        }

    </tbody>

    
  </table>
           

        </div>
    );
};

export default MyToyes;