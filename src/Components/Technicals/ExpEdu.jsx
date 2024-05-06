import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import "../../CSS/ExpEdu.css";
export const Edu = () => {
  const Edu = useSelector((state) => state.Education);

  const mappedEdu = Edu.map((ed, index) => (
    <div key={index}>
      <div className="EduDate">
        <h3>{ed.cert_name}</h3>
        <h4>
          {ed.start} - {ed.end}
        </h4>
      </div>
      <div className="level">
        <h4>{ed.institution}</h4>
        <p>{ed.level}</p>
        <p>
          <span>Description: </span>
          {ed.description}
        </p>
      </div>
    </div>
  ));

  return (
    <section id="education">
      <div className="Header">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNUlEQVR4nO2VT0oDMRSHP1KrBW/gedwqblzqTrtR3PYI4gG8SMEDKLQ3qE4rVhFEb+AuJfAC4bUzdDKZjAt/8OBB/ny/vJm8wL/+sHaAc+AZmAFnQK9NoAFOgRfAqngDLsVUFqBtw4CpAUxiwDQARhkwCYFbGTAtAisNPGUAWhWPnYJNV6Xu7OfS6kkbnCcAzlVL7QMXa8QSA0UEsCjp4UsZr9RuhAEN9Ht4+XmV+gBugEHEI9GXF2wRA7YS77KprsBsw7Pov+GyBGLrgH3oCoQKT6jXNQbboAJD4EBiqE7YGPyd4Dp9xYDvEoBvY8AD4KEBdAzsxYD9FbqWktUp75WsDXUYzHH5VnLOj4F7YAr8AL8SLp/I2NGGpuH1GoBdnk0L1cOzaRSAXZ5N+8CnhMuz6kSCFbWojo+HPeH+AAAAAElFTkSuQmCC"></img>
        <p id="Ed">Education</p>
      </div>
      {mappedEdu}
    </section>
  );
};

const Position = ({ posArr }) => {
  return (
    <div>
      {posArr.map((pos, index) => {
        return (
          <React.Fragment key={index}>
            <dt>{pos.name}</dt>
            <dd>{pos.description}</dd>
          </React.Fragment>
        );
      })}
    </div>
  );
};
Position.propTypes = {
  posArr: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export const Exp = () => {
  const exper = useSelector((state) => state.Experience);
  console.log("in experience");
  console.log(exper);

  const mappedExp = exper.map((exp, index) => (
    <div key={index}>
      <div className="ExpDate">
        <h3 className="Company">{exp.company}</h3>

        <p className="date">
          {exp.start} - {exp.end}
        </p>
      </div>

      <dl>
        <legend>Roles :</legend>
        <Position posArr={exp.positions} />
      </dl>
    </div>
  ));

  return (
    <section id="experience">
      <div className="Header">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACbUlEQVR4nO2Yu4sUQRCHvxNdEB8gKLf3UMRAMFAUMwUVfOEf4B9gJBjoeQqa+Ejcu8vMfGSmxseZmKoIhmogyKK4gneogcH6CEZqrZW27Vlmb2a6+6B/UHB7093TX1d1T1VDUlLUagBzwEcgK2gdYEb7RqPZIQBsaxGROjqpA0P0OWh4Jhplar761aYEQoUeaSzjxInFOnrQNMqeOLHYDCvUE5llwhB8ElUZoSeQQEgeIXj4ZGmPEH6ls+QRwq9uljxCPas0D0wAk8DCSvbIpJFlb00gFPNIv96uwxbUK+KNRzW+5wOay2cR2GvgBnAMGAfWqsnfx4Gb2ib3Jma7wtTpmUH2FDg8REV7BHhmeKLVrxCvEpd2O2D3Fen4Q2HEhSEk7x0xfp92gJwxno/kzdV3KP3S8BDtAZaAx8ZRfd3R57Y+26Lfpi/A/tAg5y2I/v8/61597+izqJck5v3Cko4RBOS5hsaEBbFcWwQ2hAA5asT5fAXj3Q3hkVdWSI8Cn0qM9w7YGAJEYtzWg7KXcqZ8h9VJ4CJwH/jmaNcFpoAmMKZtuzn74w5wATjhE2RnwYWb4n9NF+jnDWR9QZCmA2Q0JpB1JUDGYwKR5LTI+6YdIJdjApH0XLQZOASczcm4uwozpnYJ+O5oJxnAFT08mj5BWhUfv7P2YL5AXlpZ7l7gZ4nxvhrh2pPPgkoqPdFq4EVFuduaPojPUvcJsEqP03YF47V1rJ4anktd+RKjYdG2vtS3gDc5G7ulbUyIf0IrpLYBb4GHWjSJzjlArvWewCbgniaMO4hMf+sJ/uiUA0TK30F9otQuB4hcSAzUb/PmpxdDUABQAAAAAElFTkSuQmCC" />{" "}
        <p id="Ex">Experience</p>
      </div>
      {mappedExp}
    </section>
  );
};
