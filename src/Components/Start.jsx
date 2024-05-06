import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../CSS/Start.css";
import flower from "./Icons/flower.png";

const Start = () => {
  const [welcome_msg, setWelcmsg] = useState("Hello, Welcome to my website!");
  const size = useSelector((state) => state.Screensize);
  useEffect(() => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    if (currentHour < 12) {
      setWelcmsg("Good morning!");
    } else if (currentHour < 18) {
      setWelcmsg("Good afternoon!");
    } else {
      setWelcmsg("Good evening!");
    }
  }, []);

  return (
    <div className="starry-sky-container">
      <div id="messagect">
        <h1>
          {welcome_msg} <br />
          Welcome To My Website
        </h1>
        <Link id="start" to="/Intro">
          Start
        </Link>
      </div>
      {size == "small" && (
        <>
          <img id="flower1" src={flower} alt="flower" />
          <img id="flower2" src={flower} alt="flower" />
        </>
      )}
    </div>
  );
};

export default Start;
