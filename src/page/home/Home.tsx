import { useContext } from "react";
import { MyContext } from "../../context/Context";
import "./home.scss";

const Home = () => {
  const { setPageActive } = useContext(MyContext);
  return (
    <div
      id="0"
      className="wapped-content home"
      onMouseEnter={() => {
        setPageActive(0);
      }}
    >
      <div className="containers">
        <div className="content-left">
          <div className="text">
            <h2>Hi, I’m Luong Thanh Thang</h2>
            <h1 className="text__gradient">
              I’m A Front-end <br />
              Developer.
            </h1>
            <div className="text__ps">
              <p>
                I like learning new things about code and develop good features
                for users
              </p>
              <p>
                You never a loser if you know what need you learn and what need
                you do !
              </p>
            </div>
            <button> <a href="#1">See More about me</a></button>
          </div>
        </div>
        <div className="content-right">
          <div className="avatar"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
