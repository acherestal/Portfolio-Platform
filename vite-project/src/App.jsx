import { useState } from "react";
import AddProjectForm from "./components/AddProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Project 1", description: "Description of the project" },
    { id: 2, title: "Project 2", description: "Description of the project" },
    { id: 3, title: "Project 3", description: "Description of the project" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  function addProject(newProject) {
    setProjects([...projects, { id: Date.now(), ...newProject }]);
  }

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title">Personal Project Showcase App</h1>

      <div className="box">
        <AddProjectForm addProject={addProject} />
      </div>

      <div className="box">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ProjectList projects={filteredProjects} />
      </div>
    </div>
  );
}

export default App;
