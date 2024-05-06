import { Link } from "react-router-dom";
import "../CSS/App.css";

const Footer = () => {
  return (
    <footer>
      <div className="ftLinks">
        <Link className="link" to="/Contact">
          Contact Me
        </Link>
        <img
          className="soc"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAWklEQVR4nO3VywmAQAxF0VvAdDGFzVp0YclTiRHBAnQxxM89kHUeCSQgSR9UgZbVvAAd2IApK8R6BjhqMQRvnEQMqsshYmCAmYQVhM3509jLE05xzXxGksRdOxDHSxLUjOrjAAAAAElFTkSuQmCC"
        />
      </div>
      <Link to="/Intro">Check My Socials</Link>
      <i>
        <a target="_blank" href="https://icons8.com">
          Icons From Icons8
        </a>
      </i>

      <i>
        <a target="_blank" href="https://icons8.com/illustrations">
          Illustration by Icons 8 from Ouch{" "}
        </a>
      </i>
      <p className="arr nt">Nicole Tabet</p>
      <p className="arr">@2024, All rights Reserved</p>
    </footer>
  );
};

export default Footer;
