import axios from "axios";
import { useEffect, useReducer } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../Firebase/Firebase";

const initialState = {
  image: "",
  name: "",
  species: "",
  habitat: "",
  place_of_found: "",
  diet: "",
  description: "",
  weight_kg: "",
  height_cm: "",
  family: "",
  fileUploadError: false,
  file: undefined,
  filePerc: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_IMAGE":
      return { ...state, image: action.payload };
    case "SET_HABITAT":
      return { ...state, habitat: action.payload };
    case "SET_PLACE_OF_FOUND":
      return { ...state, place_of_found: action.payload };
    case "SET_DIET":
      return { ...state, diet: action.payload };
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    case "SET_WEIGHT_KG":
      return { ...state, weight_kg: action.payload };
    case "SET_HEIGHT_CM":
      return { ...state, height_cm: action.payload };
    case "SET_FAMILY":
      return { ...state, family: action.payload };
    case "SET_FILE_UPLOAD_ERROR":
      return { ...state, fileUploadError: action.payload };
    case "SET_FILE":
      return { ...state, file: action.payload };
    case "SET_FILE_PERC":
      return { ...state, filePerc: action.payload };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_SPECIES":
      return { ...state, species: action.payload };
    default:
      return state;
  }
};

export const useCreateAnimal = (animalType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    image,
    description,
    diet,
    height_cm,
    family,
    place_of_found,
    weight_kg,
    habitat,
    species,
    name,
    fileUploadError,
    file,
    filePerc,
  } = state;

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        dispatch({ type: "SET_FILE_PERC", payload: Math.round(progress) });
      },
      (error) => {
        console.error("Error uploading image:", error);
        dispatch({ type: "SET_FILE_UPLOAD_ERROR", payload: true });
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          dispatch({ type: "SET_IMAGE", payload: downloadURL })
        );
      }
    );
  };

  const createAnimal = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        image,
        description,
        diet,
        height_cm,
        family,
        place_of_found,
        weight_kg,
        habitat,
        species,
        name,
      };

      const endpointOfAnimals = {
        dogs: "http://localhost:3001/api/dogs/createDog",
        cats: "http://localhost:3001/api/cats/createCat",
        birds: "http://localhost:3001/api/birds/createBird",
      };

      const res = await axios.post(endpointOfAnimals[animalType], formData);
      const data = res.data;

      if (data.success === false) {
        console.error("Error creating event:", data.message);
        return;
      }
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return {
    image,
    createAnimal,
    filePerc,
    setFile: (file) => dispatch({ type: "SET_FILE", payload: file }),
    fileUploadError,
    name,
    setName: (name) => dispatch({ type: "SET_NAME", payload: name }),
    setFamily: (family) => dispatch({ type: "SET_FAMILY", payload: family }),
    setPlace_of_found: (place_of_found) => dispatch({ type: "SET_PLACE_OF_FOUND", payload: place_of_found }),
    setSpecies: (species) => dispatch({ type: "SET_SPECIES", payload: species }),
    setHabitat: (habitat) => dispatch({ type: "SET_HABITAT", payload: habitat }),
    setWeight_kg: (weight_kg) => dispatch({ type: "SET_WEIGHT_KG", payload: weight_kg }),
    setHeight_cm: (height_cm) => dispatch({ type: "SET_HEIGHT_CM", payload: height_cm }),
    setDiet: (diet) => dispatch({ type: "SET_DIET", payload: diet }),
    setDescription: (description) => dispatch({ type: "SET_DESCRIPTION", payload: description }),
    family,
    weight_kg,
    height_cm,
    species,
    habitat,
    place_of_found,
    description,
    file,
    diet,
    dispatch
  };
};
