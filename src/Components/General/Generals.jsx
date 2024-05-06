import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { storage } from "../../Firebase/config";
import { ref, getDownloadURL } from "firebase/storage";
import "../../CSS/Intro.css";

const DownloadCV = () => {
  return (
    <div id="cv">
      <p>Download my CV</p>
      <a
        href="https://firebasestorage.googleapis.com/v0/b/nicole-tabet-website.appspot.com/o/cv.pdf?alt=media&token=971a8df8-3cdc-4df7-9302-2e6a0284681e"
        download
        target="_blank"
      >
        <img
          id="cvDownload"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAkElEQVR4nO2UWwqAMAwE9xRavKIeV3ycJlJIIUioSBvFmoFFP1IzplXAccogzmuQC8C3AH4I4Z8h/eJHNAIINwQCr6nCxE1WRUITCFxLvLaYDsDMD9wBDBmBXtRup1oTCRICZs1zEknAvLm2v+kq77VzAstJkIjpm19JPNo8EUe9cMzHnptETLtQpXxXwGmfA7jybeFofmvAAAAAAElFTkSuQmCC"
        />
      </a>
    </div>
  );
};

const AccountElt = ({ acc }) => {
  const IconRef = "Accounts/" + acc.icon;
  const [icon, setIcon] = useState("");

  useEffect(() => {
    if (acc.icon != undefined) {
      const storageRef = ref(storage, IconRef);

      getDownloadURL(storageRef)
        .then((url) => {
          setIcon(url);
          console.log(url);
        })
        .catch((error) => {
          console.error("Error fetching image:", error);
        });

      return () => {};
    }
  }, [IconRef]);
  return (
    <a href={acc.link} target="_blank">
      <img className="accIcon" src={icon} alt="account icon" />
    </a>
  );
};
AccountElt.propTypes = {
  acc: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

const Generals = () => {
  const intro = useSelector((state) => state.Introduction);
  const accounts = useSelector((state) => state.Accounts);

  const profileRef = "Album/" + intro.profile_pic;
  const [profile, setProfile] = useState("");

  useEffect(() => {
    if (intro.profile_pic != undefined) {
      const storageRef = ref(storage, profileRef);

      getDownloadURL(storageRef)
        .then((url) => {
          setProfile(url);
          console.log(url);
        })
        .catch((error) => {
          console.error("Error fetching image:", error);
        });

      return () => {};
    }
  }, [profileRef]);

  return (
    <section id="general">
      <h1 id="myName">{intro.name}</h1>
      <div id="MyDesc">
        <div id="infos">
          <p className="NaBi">
            <span>BirthDay: </span>
            {intro.birthday}
          </p>
          <p className="NaBi">
            <span>Nationality: </span>
            {intro.nationality}
          </p>

          <p id="AboutMe">
            <span>About Me:</span>
            <br />
            {intro.description}
          </p>
          <p id="Hobbies">
            <span>Hobbies:</span> <br />
            {intro.hobbies}
          </p>
        </div>
        <div id="imgCv">
          <img src={profile} alt="profile picture" className="NiniPic" />
          <DownloadCV />
        </div>
      </div>

      <div id="socials">
        <span>Check My Socials: </span>
        <div className="iconsct">
          {Object.keys(accounts).map((key) => {
            const account = accounts[key]; // Get the nested account object
            return <AccountElt key={key} acc={account} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Generals;
