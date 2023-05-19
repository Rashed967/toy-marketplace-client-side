import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect, useState } from 'react';
import TabOne from './TabOne';
import TabTwo from './TabTwo';
import TabThree from './TabThree';
// import 'react-tabs/style/react-tabs.css';
const Categories = () => {
    const [games, setGames] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/gamesByCategory?subcategory=Simulation`)
        .then(res => res.json())
        .then(data => {
            setGames(data)
            
        })
        .catch(error => console.error(error.message))

    }, [])

    const tabOneHandler = (subcategory) => {
        fetch(`http://localhost:5000/gamesByCategory?subcategory=${subcategory}`)
        .then(res => res.json())
        .then(data => {
            setGames(data)
            
        })
        .catch(error => console.error(error.message))
    }

    return (
        <div>
            <h1 className='text-center text-3xl text-yellow-400 font-medium mt-5'>Shop By Category</h1>
            <div className='mt-7 mb-11'>
            <Tabs>
    <TabList className="flex justify-center gap-x-10 mb-10">
      <Tab onClick={() => tabOneHandler("Simulation")} className="tab tab-bordered">Title 1</Tab>
      <Tab onClick={() => tabOneHandler("Racing")} className="tab tab-bordered">Title 2</Tab>
      <Tab onClick={() => tabOneHandler("Sports")} className="tab tab-bordered">Title 3</Tab>
    </TabList>

    <TabPanel>
     <div className='grid md:grid-cols-3 gap-4'>
     {
        games.map(game => <TabOne
        key={game._id}
        game={game}
        ></TabOne>)
      }
     </div>
    </TabPanel>
        
    <TabPanel>
    {
            games.map(game => <TabTwo
            key={game._id}
            game={game}
            ></TabTwo>)
        }
      
    </TabPanel>
    <TabPanel>
    {
            games.map(game => <TabThree
            key={game._id}
            game={game}
            ></TabThree>)
        }
    </TabPanel>
  </Tabs>
            </div>
        </div>
    );
};

export default Categories;