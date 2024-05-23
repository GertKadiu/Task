import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Ui/Card';
import styles from './Animals.module.css';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

export default function AnimalDetails() {
  const [singleAnimal, setSingleAnimal] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/api/dogs/${id}`)
      .then((result) => {
        setSingleAnimal(result.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!singleAnimal) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar/>
      <Card key={singleAnimal._id}>
        <img src={singleAnimal.image} alt='dog' style={{ width: "100%", height:"150px", borderRadius:"5px", objectFit:"cover", alignSelf: 'center' }} />
        <div className={styles.name}>{singleAnimal.name}</div>
        <div>Family: {singleAnimal.family}</div>
        <div className={styles.contanier}>
          <div>{singleAnimal.species}</div>
          <div className={styles.numbers}>
            <div className={styles.background}>{singleAnimal.weight_kg}kg</div>
            <div className={styles.background}>{singleAnimal.height_cm}cm</div>
          </div>
        </div>
        <div className={styles.description}>
          {singleAnimal.description}
        </div>
        <div>{singleAnimal.habitat}</div>
        <div>Place of Found: {singleAnimal.place_of_found}</div>
        <div>Diet: {singleAnimal.diet}</div>
      </Card>
    </div>
  );
}
