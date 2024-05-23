import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./aboutUs.module.css";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 className={styles.subheading}>Learn more about your pet friend!</h2>
        <img src="./assets/aboutUs.jpg" alt="pic" />
        <p className={styles.text}>
          At [Your Organization's Name], we believe pets are more than just
          animals—they are cherished members of our families who bring joy,
          companionship, and love into our lives. Our diverse range of pets,
          from loyal dogs and affectionate cats to playful birds and curious
          reptiles, are selected for their unique personalities and traits.
          Whether you are looking for a furry friend to cuddle, a feathered
          companion to chat with, or a scaly buddy to observe, we have the
          perfect pet waiting to find a loving home. Our dedicated team ensures
          each pet is well-cared for, healthy, and ready to become a beloved
          part of your family. Discover the perfect companion and experience the
          unconditional love that pets bring.
        </p>
      </div>
      <img className={styles.pet} src="./assets/Pet-Png-Photo.png" alt="pic" />
      <div className={styles.footer}>
        <p>Love your pets!</p>
      </div>
    </div>
  );
}
