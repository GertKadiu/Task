import UploadPic from "../components/UploadImage/uploadPic";

import styles from "./createDogs.module.css";
import UploadStatus from "../components/UploadImage/UploadStatus";
import {  useCreateAnimal } from "../Hook/Action";

const CreateDogForm = () => {
  
    const {
      image,
      createAnimal,
      filePerc,
      setFile,
      fileUploadError,
      name,
      setName,
      setFamily,
      setPlace_of_found,
      setSpecies,
      setHabitat,
      setWeight_kg,
      setHeight_cm,
      setDiet,
      setDescription,
      family,
      weight_kg,
      height_cm,
      species,
      habitat,
      place_of_found,
      description,
      diet,
    } = useCreateAnimal('dogs');

  return (
    <form onSubmit={createAnimal}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Family:</label>
        <input
          type="text"
          name="family"
          value={family}
          onChange={(e) => setFamily(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Species:</label>
        <input
          type="text"
          name="species"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Habitat:</label>
        <input
          type="text"
          name="habitat"
          value={habitat}
          onChange={(e) => setHabitat(e.target.value)}
        />
      </div>
      <div>
        <label>Place of Found:</label>
        <input
          type="text"
          name="place_of_found"
          value={place_of_found}
          onChange={(e) => setPlace_of_found(e.target.value)}
        />
      </div>
      <div>
        <label>Diet:</label>
        <input type="text" name="diet" value={diet} onChange={(e) => setDiet(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Weight (kg):</label>
        <input
          type="number"
          name="weight_kg"
          value={weight_kg}
          onChange={(e) => setWeight_kg(e.target.value)}
        />
      </div>
      <div>
        <label>Height (cm):</label>
        <input
          type="number"
          name="height_cm"
          value={height_cm}
          onChange={(e) => setHeight_cm(e.target.value)}
        />
      </div>
      {image && (
        <div className={styles.place}>
          <img src={image} alt="Selected" className={styles.img} />
        </div>
      )}
      <UploadPic onChange={(e) => setFile(e.target.files[0])} />
      <UploadStatus fileUploadError={fileUploadError} filePerc={filePerc} />
      <button type="submit">Create Dog</button>
    </form>
  );
};

export default CreateDogForm;
