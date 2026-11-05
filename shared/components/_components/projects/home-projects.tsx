import { PROJECTS } from "../../../data/projects.data";
import { ProjectGrid } from "./project-grid";

export default function HomeProjects() {
  return <ProjectGrid projects={PROJECTS.slice(0, 4)} />;
}
