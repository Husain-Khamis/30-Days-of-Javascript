export default function SearchInput({ value, onChange, onSearch }) {
  return (
    <input
      className="search-input"
      value={value}
      onChange={(e) => {
        onChange(e.target.value)
        onSearch()
      }}
      placeholder="Search for a movie..."
    />
  )
}