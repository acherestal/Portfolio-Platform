export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search Projects"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}
