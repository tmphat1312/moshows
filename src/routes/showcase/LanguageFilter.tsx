import CustomSelect from "../../components/CustomSelect"
import { SkeletonBox } from "../../components/Skeleton"
import { useFetch } from "../../hooks/useFetch"
import { APILanguageResults } from "../../types/API"

function LanguageFilter({ currentLanguage, setLanguage }: LanguageFilterProps) {
  const { data, status } = useFetch<APILanguageResults[]>(
    "/configuration/languages"
  )

  if (status == "pending") {
    return (
      <label htmlFor="language" className="block font-semibold capitalize">
        language
        <SkeletonBox>
          <div className="w-full h-8" />
        </SkeletonBox>
      </label>
    )
  }

  if (status == "rejected" || data == null) {
    return <p>Error loading languages</p>
  } // TODO: error indicator

  const languageSelectOptions = data.map((language) => {
    return {
      text: language.english_name,
      value: language.iso_639_1,
    }
  })

  return (
    <label htmlFor="language" className="block font-semibold capitalize">
      language
      <CustomSelect
        items={languageSelectOptions}
        action={(value) => setLanguage(value)}
        defaultValue={currentLanguage}
        key={currentLanguage}
      />
    </label>
  )
}

export type LanguageFilterProps = {
  currentLanguage: string
  setLanguage: (value: string) => void
}

export default LanguageFilter
