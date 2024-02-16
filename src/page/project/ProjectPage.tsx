import { useContext } from "react";
import { MyContext } from "../../context/Context";
import { projects } from "../../data";

const ProjectPage = () => {
  const { setPageActive } = useContext(MyContext);
  return (
    <div
      className="wapped-content project-page"
      onMouseEnter={() => setPageActive(1)}
      id="1"
    >
      {projects.map((item: { name: string; img: string ; url: string}, index: number) => {
        return (
          <div className="projects">
            <div
              key={index}
              className="img__project"
              style={{ backgroundImage: `url(./${item.img})` }}
              onClick={()=> window.open(item.url)}
            ></div>
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectPage;
