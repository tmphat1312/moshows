import Collapse from "../../components/Collapse"
import { useShowcaseStore } from "../../stores/showcaseStore"
import GenreFilter from "./GenreFilter"
import IncludeAdultFilter from "./IncludeAdultFilter"
import KeywordFilter from "./KeywordFilter"
import LanguageFilter from "./LanguageFilter"
import VoteAvgFilter from "./VoteAvgFilter"

function Filter() {
  const getData = useShowcaseStore((state) => state.getData)
  const resetFilter = useShowcaseStore((state) => state.resetFilter)
  const setKeywords = useShowcaseStore((state) => state.setKeywords)
  const language = useShowcaseStore((state) => state.filter.language)
  const setLanguage = useShowcaseStore((state) => state.setLanguage)
  const setVoteAvg = useShowcaseStore((state) => state.setVoteAvg)
  const toggleGenre = useShowcaseStore((state) => state.toggleGenre)
  const genres = useShowcaseStore((state) => state.filter.genres)

  return (
    <Collapse title="Filters">
      <div className="space-y-6">
        <KeywordFilter setKeywords={setKeywords} />
        <LanguageFilter currentLanguage={language} setLanguage={setLanguage} />
        <VoteAvgFilter setVoteAvg={setVoteAvg} />
        <GenreFilter activeGenres={genres} toggleGenre={toggleGenre} />
        <IncludeAdultFilter />
        <div className="flex flex-col gap-2">
          <button className="btn btn--primary" onClick={getData}>
            Filter
          </button>
          <button className="btn" onClick={resetFilter}>
            Reset filter
          </button>
        </div>
      </div>
    </Collapse>
  )
}

export default Filter
