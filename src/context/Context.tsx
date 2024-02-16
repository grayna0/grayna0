import { createContext, useEffect, useState } from "react";

export const MyContext = createContext<any>(null);
const MyState = ({ children }: { children: React.ReactElement }) => {
  const [pageActive, setPageActive] = useState<number>(0);
  const [showPoint, setShowPoint] = useState<boolean>(false);

  const [positionX, setPositionX] = useState<number>(0);
  const [positionY, setPositionY] = useState<number>(0);
  const [scrollX, setScrollX] = useState<number>(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setPositionX(e.clientX);
      setPositionY(e.clientY);
    });
    window.addEventListener("scroll", () => {
      setScrollX(window.scrollX);
    });
  }, []);
  return (
    <MyContext.Provider value={{ pageActive, setPageActive ,showPoint, setShowPoint,positionX, setPositionX,positionY, setPositionY,scrollX,setScrollX}} >
      {children}
    </MyContext.Provider>
  );
};

export default MyState;
