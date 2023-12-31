import { useDeferredValue, useState } from "react"
import { LiaTimesSolid } from "react-icons/lia"
import { SkeletonBox } from "../../components/Skeleton"
import { useFetch } from "../../hooks/useFetch"
import { APIKeywordResults, APIResponse } from "../../types/API"

export default function KeywordFilter({ setKeywords }: KeywordFilterProps) {
  const [query, setQuery] = useState("")
  const [keywordsList, setKeywordsList] = useState<
    Map<number, APIKeywordResults>
  >(new Map())
  const deferredQuery = useDeferredValue(query)
  const { data, status } = useFetch<FetchType>(
    `/search/keyword?query=${deferredQuery}`
  )
  const searchKeywords = Array.from(keywordsList.values())

  function addKeyword(item: APIKeywordResults) {
    const newMap = new Map(keywordsList)
    newMap.set(item.id, item)
    setKeywordsList(newMap)
    setQuery("")
    setKeywords(Array.from(newMap.keys()))
  }

  function removeKeyword(id: number) {
    const newMap = new Map(keywordsList)
    newMap.delete(id)
    setKeywordsList(newMap)
    setKeywords(Array.from(newMap.keys()))
  }

  let htmlContent
  if (status == "pending") {
    htmlContent = (
      <SkeletonBox>
        <p className="px-2 py-1 text-white">Loading...</p>
      </SkeletonBox>
    )
  } else if (status == "rejected" || data == null) {
    htmlContent = <p className="error-message">Error loading keywords</p>
  } else {
    htmlContent = (
      <KeywordSuggestions keywords={data.results} addKeyword={addKeyword} />
    )
  }

  return (
    <div className="relative">
      <label htmlFor="keyword" className="block font-semibold capitalize">
        keyword
      </label>
      {searchKeywords.length > 0 && (
        <SearchKeywords
          keywords={searchKeywords}
          removeKeyword={removeKeyword}
        />
      )}
      <input
        type="text"
        name="keyword"
        id="keyword"
        className="w-full border-0 rounded-md"
        placeholder="search by keyword"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="absolute inset-x-0 overflow-y-auto text-sm rounded-md top-[110%] bg-slate-50 max-h-32 drop-shadow-lg">
        {htmlContent}
      </div>
    </div>
  )
}

type FetchType = APIResponse<APIKeywordResults>

function KeywordSuggestions({ keywords, addKeyword }: KeywordSuggestionsProps) {
  return (
    <ul>
      {keywords.map((item) => (
        <li className="cursor-pointer hover:bg-slate-200" key={item.id}>
          <button
            className="w-full px-2 py-1 text-start"
            onClick={() => addKeyword(item)}
            type="button"
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  )
}

function SearchKeywords({ keywords, removeKeyword }: SearchKeywordsProps) {
  return (
    <ul className="flex gap-1 py-2">
      {keywords.map((item) => (
        <li
          className="inline-flex items-center gap-1 px-2 text-sm rounded-full bg-slate-600 text-slate-50 drop-shadow-md"
          key={item.id}
        >
          {item.name.length > 10 ? item.name.slice(0, 10) + "..." : item.name}
          <button
            type="button"
            className="hover:text-red-500"
            onClick={() => removeKeyword(item.id)}
          >
            <LiaTimesSolid />
          </button>
        </li>
      ))}
    </ul>
  )
}

export type KeywordSuggestionsProps = {
  keywords: APIKeywordResults[]
  addKeyword: (keyword: APIKeywordResults) => void
}

export type SearchKeywordsProps = {
  keywords: APIKeywordResults[]
  removeKeyword: (id: number) => void
}

export type KeywordFilterProps = {
  setKeywords: (keywords: number[]) => void
}
