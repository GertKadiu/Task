import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Home from './pages/Home';
import CreateDogs from "./pages/CreateDogs";
import CreateCats from "./pages/CreateCats";
import CreateBirds from "./pages/CreateBirds";
import Dogs from "./pages/Dogs";
import AnimalDetalis from "./pages/AnimalDetalis";
import AboutUs from "./pages/AboutUs/AboutUs";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/createDogs" element={<CreateDogs/>}/>
    <Route path="/createCats" element={<CreateCats/>}/>
    <Route path="/createBirds" element={<CreateBirds/>}/>
    <Route path="/Dogs" element={<Dogs/>}/>
    <Route path="/dogs/:id" element={<AnimalDetalis/>}/>
    <Route path="/aboutUs" element={<AboutUs/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
