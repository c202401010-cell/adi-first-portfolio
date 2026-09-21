import { fetchProjects } from "@/lib/api";
import { ProjectSearch } from "./project-search";
import { Problem } from "./problem";

export async function ProjectRows() {
  console.log("rows ran here");

  const projects = await fetchProjects();

  if (projects.length === 0) {
    return <Problem message="No projects yet. Add the first one." />;
  }

  return <ProjectSearch projects={projects} />;
}