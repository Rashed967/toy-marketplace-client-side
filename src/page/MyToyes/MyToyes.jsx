import { useContext, useEffect, useState } from "react";
import MyToyesCard from "../../components/AllToyCard/MyToyesCard/MyToyesCard";
import useTitleHook from "../../CustomHook/TitleHook/TitleHook";
import { AuthContex } from "../../providers/AuthProviders";

const MyToyes = () => {
    useTitleHook("My toyes")
    const [myToyes, setMyToyes] = useState([])
    const {user} = useContext(AuthContex)

    useEffect(() => {
        fetch(`https://toy-joy-server-six.vercel.app/myToyes?email=${user.email}`)
        .then(res =>  res.json())
        .then(data => {
            setMyToyes(data)
        })
    },[myToyes, user.email])
    return (
        <div className="mt-14">   
            <table className="table w-full my-12">
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