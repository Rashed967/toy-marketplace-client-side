import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'


const Banner = () => {
    const images = [image1, image2, image3]
    return (
        <>
       <div>
       <div className="carousel w-full ">
  <div id="item1" className="carousel-item w-full ">
    <img src={image1} className="w-full object-cover h-5/6 relative opacity-40" />
  {/* <div className="bg-black opacity-30 w-full h-full absolute"></div> */}
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={image2} className="w-full object-cover h-3/4 opacity-40" />
  </div> 
  <div id="item3" className="carousel-item w-full ">
    <img src={image3} className="w-full object-cover h-3/4 opacity-40" />
  </div> 

</div>
</div> 

        </>
    );
};

export default Banner;