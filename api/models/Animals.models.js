import mongoose from "mongoose";

const AnimalsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true 
  },
  species: {
    type: String,
    required: true 
  },
  description: {
    type: String
  },
  family: {
    type: String
  },
  habitat: {
    type: String
  },
  place_of_found: {
    type: String
  },
  diet: {
    type: String
  },
  weight_kg: {
    type: Number
  },
  height_cm: {
    type: Number
  },
  image: {
    type: String
  }
});

const AnimalsModel = mongoose.model("Animals", AnimalsSchema);

export default AnimalsModel;
