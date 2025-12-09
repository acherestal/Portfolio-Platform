import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}
