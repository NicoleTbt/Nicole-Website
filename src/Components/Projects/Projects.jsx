import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { FDB, storage } from "../../Firebase/config";
import { ref, getDownloadURL } from "firebase/storage";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import "../../CSS/Projects.css";

const ProjElt = ({ proj }) => {
  const CanvaRef = "Projects/" + proj.Canva;
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const storageRef = ref(storage, CanvaRef);
        const url = await getDownloadURL(storageRef);
        setVideoUrl(url);
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };

    fetchVideo();

    return () => {};
  }, [CanvaRef]);

  return (
    <div className="Pro">
      <a
        href={proj.Link}
        target="_blank"
        rel="noopener noreferrer"
        className="Protitle"
      >
        <h1>{proj.Title}</h1>
      </a>
      <div className="Proct">
        <div className="Prodesc">
          <p>
            <span>Completed in:</span> {proj.Date}
          </p>

          <p>
            <span>Description: </span>
            <br></br>
            {proj.Description}
          </p>

          <p className="sklused">
            <span>Skills Used:</span> <br></br>
            {proj.skills}
          </p>
        </div>

        <video
          className="vid"
          src={videoUrl}
          type="video/mp4"
          autoPlay
          muted
          loop
        />
      </div>
    </div>
  );
};

ProjElt.propTypes = {
  proj: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Canva: PropTypes.string.isRequired,
    Link: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Date: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired,
  }).isRequired,
};

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      Title: "test",
      Canva: "Test.mp4",
      Description: "TestDesc",
      Link: "TestLink",
      Date: "X",
    },
  ]);

  const fetchData = async () => {
    try {
      const projCollectionRef = collection(FDB, "Projects");

      const Projquery = await getDocs(projCollectionRef);
      const fetchedProjects = Projquery.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setProjects(fetchedProjects);
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
    <section id="projects">
      <h1 id="Ptitle">My Projects: </h1>
      <div>
        {projects.map((project, index) => (
          <ProjElt key={index} proj={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
