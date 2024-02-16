import Contact from '../page/contact/Contact';
import ProjectPage from '../page/project/ProjectPage';
import Skill from '../page/skills/Skill';
import Home from './../page/home/Home';



const routesPage = [
    {
        title: "Home",
        compoent: Home,
        path:"/",
        icon:"home.png"

    },
    {
        title: "Project",
        compoent: ProjectPage,
        path:"./project",
        icon:"project.png"
        
    },
    {
        title: "Skill",
        compoent: Skill,
        path:"./skill",
        icon:"skill.png"

    },
    {
        title: "Contact",
        compoent: Contact,
        path:"./contact",
        icon:"contact-book.png"
    }
]


export {routesPage}