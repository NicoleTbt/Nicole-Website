import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { storage } from "../../Firebase/config";
import { ref, getDownloadURL } from "firebase/storage";
import PropTypes from "prop-types";
import "../../CSS/Technicals.css";

//Stars//
const Star1 = () => {
  return (
    <img
      className="star1 st"
      width="48"
      height="48"
      src="https://img.icons8.com/fluency/48/star--v1.png"
      alt="star--v1"
    />
  );
};

const Star2 = () => {
  return (
    <div className="star2Ct">
      <img
        className="star21 st"
        width="48"
        height="48"
        src="https://img.icons8.com/fluency/48/star--v1.png"
        alt="star--v1"
      />

      <img
        className="star22 st"
        width="48"
        height="48"
        src="https://img.icons8.com/fluency/48/star--v1.png"
        alt="star--v1"
      />
    </div>
  );
};

const Star3 = () => {
  return (
    <div className="star3Ct">
      <img
        className="star31 st"
        width="48"
        height="48"
        src="https://img.icons8.com/fluency/48/star--v1.png"
        alt="star--v1"
      />

      <img
        className="star32 st"
        width="48"
        height="48"
        src="https://img.icons8.com/fluency/48/star--v1.png"
        alt="star--v1"
      />
      <img
        className="star33 st"
        width="48"
        height="48"
        src="https://img.icons8.com/fluency/48/star--v1.png"
        alt="star--v1"
      />
    </div>
  );
};

//Skill Element displayed//
const SkillFormat = ({ skill }) => {
  const iconRef = "SkillsIMG/" + skill.icon;
  const [icon, setIcon] = useState("https://via.placeholder.com/150");

  useEffect(() => {
    const storageRef = ref(storage, iconRef);

    getDownloadURL(storageRef)
      .then((url) => {
        setIcon(url);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });

    return () => {};
  }, [iconRef]);

  return (
    <div className="Skl">
      <p className="sklName">{skill.name}</p>
      <img className="SklIcon" src={icon} alt="skill icon" />
      <div>
        {skill.rate === 1 ? (
          <Star1 />
        ) : skill.rate === 2 ? (
          <Star2 />
        ) : (
          <Star3 />
        )}
      </div>
    </div>
  );
};

SkillFormat.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
  }).isRequired,
};

//Display of skills elements on Large screen//
const SkillsDisplay = () => {
  const skills = useSelector((state) => state.Skills);

  return (
    <div id="SklLargeDisp">
      {skills.map((skill, index) => (
        <SkillFormat skill={skill} key={index} />
      ))}
    </div>
  );
};

//Display of skills elements on MEDIUM screen//
const SliderMedium = () => {
  const skills = useSelector((state) => state.Skills);
  const [current, setCurrent] = useState(0);
  const slideWidth = 100 / (skills.length - 5);

  const nextSlide = () => {
    setCurrent(current === skills.length - 4 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? skills.length - 4 : current - 1);
  };

  return (
    <div className="SklMedDisp">
      <button className="btprev" onClick={prevSlide}>
        &#10096;
      </button>
      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(-${current * slideWidth}%)` }}
        >
          {skills.map((skill, index) => (
            <div key={index} className="slideMedium">
              <SkillFormat skill={skill} />
            </div>
          ))}
        </div>
      </div>
      <button className="btnext" onClick={nextSlide}>
        &#10097;
      </button>
    </div>
  );
};

//Display of skills elements on SMALL screen//
const SliderSmall = () => {
  const skills = useSelector((state) => state.Skills);
  const [current, setCurrent] = useState(0);
  const len = skills.length;

  const nextSlide = () => {
    setCurrent(current >= len - 2 ? 0 : current + 2);
  };

  const prevSlide = () => {
    if (current >= 2) setCurrent(current - 2);
  };

  return (
    len > 1 && (
      <div className="SklSmlDisp">
        <button className="btprev" onClick={prevSlide}>
          &#10096;
        </button>
        {current <= len - 2 && (
          <div className="slider smlcont">
            <SkillFormat skill={skills[current]} />
            <SkillFormat skill={skills[current + 1]} />
          </div>
        )}
        {current === len - 1 && (
          <div className="slider smlcont">
            <SkillFormat skill={skills[current]} />
          </div>
        )}
        <button className="btnext" onClick={nextSlide}>
          &#10097;
        </button>{" "}
      </div>
    )
  );
};

//Conditional rendering of the skills display element depending on the screen size//
const RenderedSkillElt = () => {
  const size = useSelector((state) => state.Screensize);

  return (
    <section id="skills">
      <div className="Header">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADNUlEQVR4nO1Zy2oUQRStiS58i7oTfODOiIFJndvdzlRVIyqoWw2KiCKI4gdEMKugYhQ3on+QVVwoPjDruBLEEONjKQiKRl0pkahgIjXG2FOpmenu6sk42AdmNV2n7qm6deuebsZy5MiRI8f/gDAMF0uifsX5dtbOCIn2KqIZ/ZNEz0KiM6wdIYkG/wipiAGus3YD53yZAr5EhSiiHazdIIDDVbtB9JoxVmDtBkl0r2o3gAsLGoDwfS4573bhCIJgrSL6HhUiPK+z3hjJebeem2WBUrG4XgJvJDCliI6k5ZGcnzYO+Vjd54EDkmhSEb2TwAbmgj1dXcsV0WgkgGkF9KXhUkQjhpDems8CfZW5/qbgE10o0uooKKIho8Lo36WkRHpFFdHP6ILsLBY31REyYM4riW4xxjoSq7CSAbfTkCnPO2twjTQYUpDAzXmLCJxPOvExi4gxnWpJRVT4gKdGQKcajQmCYKkkemzEMS2Ao7EmFZyXJdE3Q8T7tAdO+f5WI5gfu4jWJSg0b41YphpeoqHvb1bAB3Ng6HkBSwkJXDRy/W6S8cL3uSL6asQ0UeZ8o3VAqVRaqZs4cytdSu5swXhlBHEoKYng/GBVFfudni88z1tV9WBPT88iBdy3VIp+BxF6N0oG32TacyZ16z8/vgc69uhD1yxldsi1D1JEN4yJBx3oCrbrQAKXK/+GwAmLiFGXC2jOQAETUV7tRRw5l0jgkWVnTjZNiAL2GZwftbimCWlWapkGSqcZc0OhRmpdadphb4aBkvbDPlx12CPl93kW5TdrAyXs5fflbs5XN/VCzNJACduFSPRJAFvqDgw5Fy4tihBijWmgykTb0ogoWVoUzS2AMBaBJDpuOVRjYWfniqwNVMKmcWauQsWFIrra8Ca1jQMexjVQKdr4gRRcrEMR3UlCltRAJTRWw40WsSZ0Kilg3NoS2IX0JjRQtXjOVS0IMB4nretCr6huNXQB0GcnawNVk4vz/Qr4HKtCxYUuv41KsH61Y1YX/QrIZV7h+12Cc58tJFwN1L+CQhYGquXI0kC1FBkbqNZBf6yJ+n1XA9Vy6M9put12NVA5cuTIkYO1C34BePOggqFIsTAAAAAASUVORK5CYII=" />{" "}
        <h1>Skills: </h1>
      </div>
      {size === "large" && <SkillsDisplay />}
      {size === "medium" && <SliderMedium />}
      {size === "small" && <SliderSmall />}
    </section>
  );
};

export default RenderedSkillElt;
