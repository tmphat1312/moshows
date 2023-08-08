import { useParams } from "react-router-dom"

function Search() {
  const { type, query } = useParams<{ type: string; query: string }>()

  console.log(type)
  console.log(query)

  return (
    <div>
      <p>{type}</p>
      <p>{query}</p>
    </div>
  )
}

export default Search
