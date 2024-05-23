import React, { useState, useEffect } from 'react'
import { FaUserCircle } from 'react-icons/fa';
import Search from "../components/Search"
import style from "./Dogs.module.css"
import axios from 'axios';
import AnimalPosts from '../components/PostForm/AnimalPosts';
import { Link } from 'react-router-dom';


export default function Dogs() {
  
  const [searchByName, setsearchByName] = useState('')
  const [dogs, setDogs] = useState([]);
  const [cats, setCats] = useState([]);
  const [birds, setBirds] = useState([]);
  const [activeTab, setActiveTab] = useState('dogs');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dogsResponse = await axios.get("http://localhost:3001/api/dogs/");
        setDogs(dogsResponse.data);

        const catsResponse = await axios.get("http://localhost:3001/api/cats/");
        setCats(catsResponse.data);

        const birdsResponse = await axios.get("http://localhost:3001/api/birds/");
        setBirds(birdsResponse.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setsearchByName(e.target.value)
  } 

  const filterAnimals = (animals) =>
    animals.filter(animal =>
      animal.name.toLowerCase().includes(searchByName.toLowerCase())
    );

  return (
   <div className={style.contanier}>
    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:'center'}}>
       <Link to={'/'}>
       <img src='/assets/logo.svg' alt='logo'/>
       </Link> 
        <div style={{display:'flex', alignItems:'center', gap:"10px"}}>
        <h2>Paw</h2>
        <FaUserCircle/>
        </div>
    </div>
    <div style={{display:'flex', justifyContent:"space-between"}}>
    <h2 className={style.subheading}>Learn more about your pet friend!</h2>
    <Search onChange={handleChange} value={searchByName}/>
    </div>
    <div className={style.tabContanier}>
    <button className={`${style.tab} ${activeTab === 'dogs' ? style.activeTab : ''}`} onClick={() => setActiveTab('dogs')}>Dogs</button>
    <button className={`${style.tab} ${activeTab === 'cats' ? style.activeTab : ''}`} onClick={() => setActiveTab('cats')}>Cats</button>
    <button className={`${style.tab} ${activeTab === 'birds' ? style.activeTab : ''}`} onClick={() => setActiveTab('birds')}>Birds</button>
    </div>
      <div >
      {activeTab === 'dogs' && <AnimalPosts animals={filterAnimals(dogs)} type="dogs" />}
        {activeTab === 'cats' && <AnimalPosts animals={filterAnimals(cats)} type="cats" />}
        {activeTab === 'birds' && <AnimalPosts animals={filterAnimals(birds)} type="birds" />}
      </div>
    </div>
  )
}
