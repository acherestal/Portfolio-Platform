import { useState } from "react";

export default function AddProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) return;

    addProject({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add Project</h2>

      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}
