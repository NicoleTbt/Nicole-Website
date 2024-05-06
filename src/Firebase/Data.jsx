import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { FDB } from "./config";
import { useDispatch } from "react-redux";
import {
  setSkills,
  setAlbum,
  setEducation,
  setExperience,
  setIntroduction,
} from "../Redux/Actions";

const Fetch = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const skillsCollectionRef = collection(FDB, "Skills");
      const AlbumCollectionRef = collection(FDB, "Album");
      const EduCollectionRef = collection(FDB, "Education");
      const ExpCollectionRef = collection(FDB, "Experience");
      const GeneralCollectionRef = collection(FDB, "General");

      const Skillsquery = await getDocs(skillsCollectionRef);
      const Albumquery = await getDocs(AlbumCollectionRef);
      const Eduquery = await getDocs(EduCollectionRef);
      const Expquery = await getDocs(ExpCollectionRef);
      const Genquery = await getDocs(GeneralCollectionRef);

      const fetchedskills = Skillsquery.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const fetchedEdu = Eduquery.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const fetchedExp = Expquery.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const fetchedAlbum = Albumquery.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const fetchedGen = Genquery.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      dispatch(setSkills(fetchedskills));
      dispatch(setAlbum(fetchedAlbum));
      dispatch(setEducation(fetchedEdu));
      dispatch(setExperience(fetchedExp));

      const intro = fetchedGen.find((obj) => obj.id === "Introduction");
      dispatch(setIntroduction(intro));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const getData = async () => {
      await fetchData();
    };
    getData();
  }, []);

  return null;
};

export default Fetch;
