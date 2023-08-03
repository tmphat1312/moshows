import CustomSelect from "../../components/CustomSelect"
import { SkeletonBox } from "../../components/Skeleton"
import { useFetch } from "../../hooks/useFetch"
import { useTvStore } from "../../stores/tvStore"
import { APILanguageResults } from "../../types/API"

function LanguageFilter() {
  const setLanguage = useTvStore((state) => state.setLanguage)
  const { data, status } = useFetch<APILanguageResults[]>(
    "/configuration/languages"
  )

  if (status == "pending" || !data) {
    return (
      <label htmlFor="language" className="block font-semibold capitalize">
        language
        <SkeletonBox>
          <div className="w-full h-8" />
        </SkeletonBox>
      </label>
    )
  }

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
        defaultValue="en"
      />
    </label>
  )
}

export default LanguageFilter
