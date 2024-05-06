import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSn0_Ugg3KNwJQRpYLp1yfjGcTiVtsUnw",
  authDomain: "nicole-tabet-website.firebaseapp.com",
  projectId: "nicole-tabet-website",
  storageBucket: "nicole-tabet-website.appspot.com",
  messagingSenderId: "325843156494",
  appId: "1:325843156494:web:b5cf98b56d8969ce92465f",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage();

export const FDB = getFirestore(app);
