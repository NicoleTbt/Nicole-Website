import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { FDB } from "../../Firebase/config";
import { useDispatch } from "react-redux";
import { setSkills, setEducation, setExperience } from "../../Redux/Actions";
import RenderedSkillElt from "./Skills";
import "../../CSS/Technicals.css";
import { Edu, Exp } from "./ExpEdu";

const Technicals = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const skillsCollectionRef = collection(FDB, "Skills");
      const EduCollectionRef = collection(FDB, "Education");
      const ExpCollectionRef = collection(FDB, "Experience");

      const Skillsquery = await getDocs(skillsCollectionRef);
      const Eduquery = await getDocs(EduCollectionRef);
      const Expquery = await getDocs(ExpCollectionRef);

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

      dispatch(setSkills(fetchedskills));
      dispatch(setEducation(fetchedEdu));
      dispatch(setExperience(fetchedExp));
      console.log("test if edu fetched");
      console.log(fetchedEdu);
      console.log(fetchedExp);
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

  return (
    <section id="Technicals">
      <Exp />
      <Edu />
      <RenderedSkillElt />
    </section>
  );
};

export default Technicals;
