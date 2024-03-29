/* eslint-disable @typescript-eslint/ban-ts-comment */
import { MyContext } from "../context/Context";
import { routesPage } from "../routes/routes";
import { useContext, useEffect, useState } from "react";
const Header = () => {
  const { setPageActive, pageActive, setShowPoint } = useContext(MyContext);
  const [positionTopH , setPositionTopH] = useState<number>(0)
  useEffect(()=>{
    const container =document.getElementById("container");

    container?.getClientRects()[0].height ? setPositionTopH(container?.getClientRects()[0].height) : false;
  },[])

  
  return (
    <div
      className="header"
      onPointerEnter={() => {
        setShowPoint(true);
      }}
      onPointerLeave={() => {
        setShowPoint(false);
      }}
      style={{ top: `${positionTopH - 250/2 -5 }px`}}
      >
      <div className="header-menu">
        {routesPage.map((route, index) => {
          const i = 1 + index * 2;
          const x = index < 2 ? (index === 0 ? 2.5 : 4) : index === 2 ? 2.5 : 1;
          const y =
          index < 2 ? (index === 0 ? -2 : -0.5) : index === 2 ? 1 : -0.5;
          const selectPage = pageActive === index ? true : false;
          return (
            <a
            className="menu-item"
            style={{
                // @ts-ignore
                "--translateX": x,
                "--translateY": y,
                "--rotate": i,
                backgroundColor: `${
                  selectPage ? "bisque" : "rgba(203, 230, 206, 0.562)"
                }`,
                transform: `translate(calc(var(--translateX) * 50%),calc(var(--translateY) * 55%)) rotate(calc((${i}) * 45deg)) scale(${
                  selectPage ? 1.1 : 1
                })
              translate(${selectPage ? "-10%" : "0%"} , ${
                  selectPage ? "-10%" : "0%"
                })`,
                boxShadow: ` ${selectPage ? 5 : 1}px ${
                  selectPage ? 5 : 1
                }px 10px bisque`,
              }}
              href={`#${index}`}
              onClick={() => setPageActive(index)}
              key={index}
            >
              <p
                className="icon-menu"
                style={{
                  backgroundImage: `url("./${route.icon}")`,
                  textAlign: "center",
                }}
              >
              </p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
