import CatsModel from "../models/Cats.models.js";

export const getCats = async (req, res) => {
  try {
    const dogs = await CatsModel.find();
    res.status(200).json(dogs);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get Dogs!" });
  }
};


export const createCat= async (req, res) => {
  const { 
    name,
    family,
    species,
    habitat,
    place_of_found,
    diet,
    description,
    weight_kg,
    height_cm,
    image
  } = req.body;
  try {
    const newDog = new CatsModel({
      name,
      species,
      habitat,
      place_of_found,
      diet,
      family,
      description,
      weight_kg,
      height_cm,
      image
    });
    await newDog.save();
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create DOG!" });
  }
};


export const getCatById = async (req, res) => {
  try {
    const { id } = req.params;
    const Dog = await CatsModel.findById(id);

    if (!Dog) {
      return res.status(404).json({ message: "Dog not found" });
    }

    res.status(200).json(Dog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to get Dog" });
  }
};

export const updateCatById = async (req, res) => {
  const { id } = req.params;
  try {
    await CatsModel.findByIdAndUpdate(
      { _id: id },
      {
        username: req.body.username,
        email: req.body.email,
      },
      { new: true }
    )
      .then((updateDog) => res.json(updateDog))
      .catch((error) => res.status(500).json(error));
  } catch (error) {
    console.error("Error reading and encoding image:", error);
    res.status(500).json({ error: "Error reading and encoding image" });
  }
};

export const deleteCatById = (req, res) => {
  const { id } = req.params;
  CatsModel.findByIdAndDelete({ _id: id })
    .then((dog) => res.json(dog))
    .catch((err) => res.json(err));
};
