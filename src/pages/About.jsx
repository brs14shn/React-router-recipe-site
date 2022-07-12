import Coding from "../assets/coding.svg";
import "../style/About.css";

const About = () => {
  return (
    <div className="text-center">
      <div className=" text-center">
        <img src={Coding} alt="" style={{ width: "400px" }} />
        <h2>
          About Software Developer <span>Barıs</span>
        </h2>
        <div className="bgColor d-flex flex-column align-items-end border border-light w-50 mx-auto rounded">
          <h3>Hi, I'am Barıs</h3>
          <p>I’m currently learning Full-Stack Development Languages.</p>
          <p>I know JS, ReactJS, SQL, Python,Bootstrap, Sass.</p>
          <h3>
            <a href="mailto:brsshn292929@gmail.com">Send email</a> :
            brsshn292929@gmail.com
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
