import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <section>
      <h1>404 No Page Available</h1>
      <Link to="/Intro">Go back to Intro Page</Link>
    </section>
  );
};

export default NoPage;
