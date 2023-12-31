import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState } from 'react';
import TabOne from './TabOne';
import TabTwo from './TabTwo';
import TabThree from './TabThree';
// import 'react-tabs/style/react-tabs.css';
const Categories = () => {
    const [games, setGames] = useState([])


    useEffect(() => {
        fetch(`https://toy-joy-server-six.vercel.app/gamesByCategory?subcategory=Simulation`)
        .then(res => res.json())
        .then(data => {
            setGames(data)
            
        })
        .catch(error => console.error(error.message))

    }, [])

    const tabOneHandler = (subcategory) => {
        fetch(`https://toy-joy-server-six.vercel.app/gamesByCategory?subcategory=${subcategory}`)
        .then(res => res.json())
        .then(data => {
            setGames(data)
            
        })
        .catch(error => console.error(error.message))
    }

    return (
        <div>
            <h1 data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className='text-center text-3xl text-yellow-400 font-medium mt-5 underline'>Shop By Category</h1>
            <div className='mt-7 mb-11'>
            <Tabs>
    <TabList className="flex justify-center gap-x-10 mb-10">

      <Tab onClick={() => tabOneHandler("Simulation")} className="tab tab-bordered">Simulation</Tab>
      <Tab onClick={() => tabOneHandler("Racing")} className="tab tab-bordered">Racing</Tab>
      <Tab onClick={() => tabOneHandler("Sports")} className="tab tab-bordered">Sports</Tab>
    </TabList>


    <TabPanel>
     <div className='grid justify-center md:grid-cols-2 lg:grid-cols-2 gap-6'>
     {
        games.map(game => <TabOne
        key={game._id}
        game={game}
        ></TabOne>)
      }
     </div>
    </TabPanel>
        
    <TabPanel>
    <div className='grid md:grid-cols-3 gap-6'>
    {
            games.map(game => <TabTwo
            key={game._id}
            game={game}
            ></TabTwo>)
        }
    </div>
      
    </TabPanel>
    <TabPanel>
    <div className='grid md:grid-cols-3 gap-6'>
    {
            games.map(game => <TabThree
            key={game._id}
            game={game}
            ></TabThree>)
        }
    </div>
    </TabPanel>
  </Tabs>
            </div>
        </div>
    );
};

export default Categories;