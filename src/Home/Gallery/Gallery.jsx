
import image4 from '../../assets/images4.jpg';
import image6 from '../../assets/image6.jpg';
import image7 from '../../assets/image7.jpg';
import image12 from '../../assets/image12.jpg';
import image13 from '../../assets/image13.jpg';
import image14 from '../../assets/image14.jpg';
const Gallery = () => {
    const images = [image7, image14, image13, image4, image12, image6]
     
    return (
        <div>
            <h3 className='text-center text-3xl font-semibold mb-4 text-yellow-400 underline'>Gallery section </h3>
            <div className='grid lg:grid-cols-3 gap-7 p-5 justify-center items-center md:w-4/5 md:mx-auto'>
            {
                images.map(image => {
                   return <img className='h-96 border border-r-yellow-500 p-6 rounded-md bg-orange-400' src={image} alt="" />
                })
            }
            </div>
        </div>
    );
};

export default Gallery;