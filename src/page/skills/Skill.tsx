import  { useContext } from "react";
import { MyContext } from "../../context/Context";

const Skill = () => {
  const { setPageActive } = useContext(MyContext);

  return (
    <div
      className="wapped-content skill"
      onMouseEnter={() => {
        setPageActive(2);
      }}
      id="2"
    >
      <div className="major box-item" onMouseEnter={() => { setPageActive(1);}} >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
          </svg>
        </span>
        <h2>Major</h2>
        <p>HTML</p>
        <p>CSS</p>
        <p>Javascript</p>
        <p>Typescript</p>
        <p>React</p>

      </div>
      <div className="minor box-item" >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
          </svg>
        </span>
        <h2>Minor</h2>
        <p>Vue</p>
        <p>MongoDb</p>
      </div>
      <div className="other box-item">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
          </svg>
        </span>
        <h2>Other</h2>
        <p>GitHub</p>
        <p>VsCode</p>
        <p>Styled Components</p>
        <p>Redux toolkit</p>
        <p>Component</p>
        <p>Firebase</p>
        <p>Rest API </p>
      </div>
    </div>
  );
};

export default Skill;
