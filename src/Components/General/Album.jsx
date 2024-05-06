import { useSelector } from "react-redux";

const Album = () => {
  const alb = useSelector((state) => state.Album);

  console.log("in alb");
  console.log(alb[0]);

  return <div> ALBUM </div>;
};

export default Album;
