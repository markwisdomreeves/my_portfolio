import { v4 as uuids4 } from "uuid"
import ProjectOneImg from "./assets/project-img-1.jpg"
import ProjectTwoImg from "./assets/project-img-2.jpg"
import ProjectThreeImg from "./assets/project-img-3.jpg"


const project_data = [
  {
    id: uuids4(),
    name: "Health care Website Project",
    desc: "Project built using React, Redux, Node & Express, Mongodb.",
    img: ProjectOneImg,
  },
  {
    id: uuids4(),
    name: "Real Estate website Project",
    desc: "Project built using React, Node, Express & Mongodb.",
    img: ProjectTwoImg,
  },
  {
    id: uuids4(),
    name: "Bank Website Project",
    desc: "Project built using React, Node, Express & Mongodb.",
    img: ProjectThreeImg,
  }
];


export default project_data;
