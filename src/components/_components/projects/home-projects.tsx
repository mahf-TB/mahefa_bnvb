import { PROJECTS } from "@/data/projects.data";
import ProjectChangelog from "./project-changlog";

export default function HomeProjects() {
  return <ProjectChangelog projects={PROJECTS.slice(0, 3)} />;
}
