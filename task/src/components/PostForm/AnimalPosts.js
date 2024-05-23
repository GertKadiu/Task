import { Link } from 'react-router-dom';
import Card from '../../Ui/Card';
import styles from './AnimalPost.module.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function AnimalPosts({ animals, type }) {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); 
      }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="3000" className={styles.grid}>
      {animals.map(animal => (
        <Card key={animal._id}>
          <img src={animal.image} alt='dog' style={{ width: "100%", height:"150px", borderRadius:"5px", objectFit:"cover", alignSelf: 'center' }} />
          <Link to={`/cats/${animal._id}`} className={styles.name}>{animal.name}</Link>
          <div className={styles.contanier}>
          <div>{animal.family}</div>
            <div className={styles.numbers} >
                <div className={styles.background}>{animal.weight_kg}kg</div>
            <div className={styles.background}>{animal.height_cm}cm</div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
