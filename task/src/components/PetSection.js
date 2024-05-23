import React from "react";
import styles from "./PetSection.module.css";
import {Link} from "react-router-dom"

const PetSection = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.subheading}>Learn more about your pet friend!</h2>
        <h1 className={styles.heading}>Pet's World</h1>
        <button className={styles.button}>Open Gallery</button>
      </div>

      <div className={styles.categories}>
        <div className={styles.category}>
          <img src="/assets/cats.png" alt="Cats" className={styles.image} />
          <div className={styles.categoryContent}>
            <Link className={styles.Link}>Cats</Link>
          </div>
        </div>
        <div className={styles.category}>
          <img src="/assets/dog.png" alt="Dogs" className={styles.image} />
          <div className={styles.categoryContent}>
            <Link className={styles.Link} to={'/dogs'}>Dogs</Link>
          </div>
        </div>
        <div className={styles.category}>
          <img src="/assets/bird.webp" alt="Birds" className={styles.image} />
          <div className={styles.categoryContent}>
            <Link className={styles.Link}>Birds</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetSection;