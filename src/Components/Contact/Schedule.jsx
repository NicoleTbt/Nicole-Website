import "../../CSS/Contact.css";
import { useState, useEffect } from "react";

const Schedule = () => {
  const [size, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="scheduleCt">
      <h1>Schedule</h1>

      {size >= 700 && (
        <table>
          <thead>
            <tr>
              <th></th>
              <th>
                8:00 AM <br /> 9:30 AM
              </th>
              <th>
                9:30 AM <br /> 11:00 AM
              </th>
              <th>
                11:00 AM <br /> 12:30 PM
              </th>
              <th>
                12:30 PM <br /> 2:00 PM
              </th>
              <th>
                2:00 PM <br /> 3:30 PM
              </th>
              <th>
                3:30 PM <br /> 5:00 PM
              </th>
              <th>
                5:00 PM <br /> 6:30 PM
              </th>
              <th>
                6:30 PM <br /> 7:30 PM
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="time">Monday</td>
              <td className="c6">
                CSC315
                <br /> DSA
              </td>

              <td></td>
              <td className="c1">
                CHM270 <br />
                CHEM LAB
              </td>
              <td className="c1">
                CHM270 <br />
                CHEM LAB
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="time">Tuesday</td>
              <td></td>
              <td></td>
              <td className="c2">
                CSC360 <br />
                IT
              </td>

              <td></td>
              <td className="c3">
                MAT310
                <br /> ALGEBRA 2
              </td>

              <td></td>
              <td className="c4">
                CSC352 <br />
                THEORY
              </td>
              <td className="c5">
                CSC368 <br />
                MGT
              </td>
            </tr>
            <tr>
              <td className="time">Wednesd</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="time">Thursday</td>
              <td></td>
              <td></td>
              <td className="c2">
                CSC360 <br />
                IT
              </td>

              <td></td>
              <td className="c3">
                MAT310
                <br /> ALGEBRA 2
              </td>

              <td></td>
              <td className="c4">
                CSC352 <br />
                THEORY
              </td>
              <td className="c5">
                CSC368 <br />
                MGT
              </td>
            </tr>
            <tr>
              <td className="time">Friday</td>
              <td className="c6">
                CSC315
                <br /> DSA
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      )}
      {size < 700 && (
        <table>
          {" "}
          <thead>
            <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="time">8:00 AM</td>
              <td className="c6">CSC315</td>
              <td></td>
              <td></td>
              <td></td>
              <td className="c6">CSC315</td>
            </tr>
            <tr>
              <td className="time">9:30 AM</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="time">11:00 AM</td>
              <td className="c1">CHM270</td>
              <td className="c2">CSC360</td>
              <td></td>
              <td className="c2">CSC360</td>
              <td></td>
            </tr>
            <tr>
              <td className="time">12:30 PM</td>
              <td className="c1">CHM270</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="time">2:00 PM</td>
              <td></td>
              <td className="c3">MAT310</td>
              <td></td>
              <td className="c3">MAT310</td>
              <td></td>
            </tr>
            <tr>
              <td className="time">3:30 PM</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="time">5:00 PM</td>
              <td></td>
              <td className="c4">CSC352</td>
              <td></td>
              <td className="c4">CSC352</td>
              <td></td>
            </tr>
            <tr>
              <td className="time">6:30 PM</td>
              <td></td>
              <td className="c5">CSC368</td>
              <td></td>
              <td className="c5">CSC368</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      )}
    </section>
  );
};

export default Schedule;
