import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { FDB } from "../../Firebase/config";
import { useDispatch } from "react-redux";
import { setIntroduction, setAccounts } from "../../Redux/Actions";
import Generals from "./Generals.jsx";

const IntroPage = () => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      const GeneralCollectionRef = collection(FDB, "General");

      const Genquery = await getDocs(GeneralCollectionRef);

      const fetchedGen = Genquery.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const intro = fetchedGen.find((obj) => obj.id === "Introduction");
      dispatch(setIntroduction(intro));
      console.log(intro);

      const accounts = fetchedGen.find((obj) => obj.id === "Accounts");
      dispatch(setAccounts(accounts));
      console.log(accounts);
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
    <section id="introPage">
      <Generals />
    </section>
  );
};

export default IntroPage;
