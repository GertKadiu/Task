import { initializeApp } from "@firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDRHNlNgmEagjbeDnZJEJYP3gOeaOm37MQ",
  authDomain: "animals-4983e.firebaseapp.com",
  projectId: "animals-4983e",
  storageBucket: "animals-4983e.appspot.com",
  messagingSenderId: "548906757598",
  appId: "1:548906757598:web:9fc5d566b84e3242aec14f",
  measurementId: "G-Z6LTMZV35D"
};


export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

