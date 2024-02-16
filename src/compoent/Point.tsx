import  { useContext} from "react";
import { MyContext } from "../context/Context";

const Point = () => {
  const { showPoint,positionX,positionY,scrollX} = useContext(MyContext)


  return (
    <div className="point__follow" style={{display:`${showPoint ? "none" : "block"}` }}>
      <div
      className="point"
        style={{
          position: "absolute",
          width: "60px",
          height: "60px",
          border: "1px solid white",
          borderRadius: "100%",
          transform: `translate(${positionX + scrollX}px , ${positionY}px )`,
          transition: ".09s all",
          pointerEvents: "none",
          left: -20,
          top: -20,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          width: "25px",
          height: "25px",
          backgroundColor: "white",
          borderRadius: "100%",
          transform: `translate(${scrollX + positionX}px , ${positionY}px )`,
          pointerEvents: "none",
          left: -10,
          top: -10,
        }}
      ></div>
    </div>
  );
};

export default Point;
