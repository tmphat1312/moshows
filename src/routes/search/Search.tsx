import BackgroundWall from "../../components/BackgroundWall"
import CommonErrorMessage from "../../components/CommonErrorMessage"
import Pagination from "../../components/Pagination"
import SearchForm from "../../components/SearchForm"
import { titleMap } from "../../constants"
import { useSearchStore } from "../../stores/searchStore"
import { APIMovieResult, APIPersonResult, APITVResult } from "../../types/API"
import PeopleSearchView, { PeopleSearchViewSkeleton } from "./PeopleSearchView"
import ShowcaseSearchView, {
  ShowcaseSearchViewSkeleton,
} from "./ShowcaseSearchView"

export default function Search() {
  const totalItems = useSearchStore((state) => state.totalItems)
  const query = useSearchStore((state) => state.searchQuery)
  const setPage = useSearchStore((state) => state.setPage)
  const status = useSearchStore((state) => state.status)
  const type = useSearchStore((state) => state.type)
  const page = useSearchStore((state) => state.page)
  const data = useSearchStore((state) => state.data)

  const items = data ?? []
  const SkeletonView = {
    movie: <ShowcaseSearchViewSkeleton />,
    tv: <ShowcaseSearchViewSkeleton />,
    person: <PeopleSearchViewSkeleton />,
  }[type]
  const View = {
    movie: (
      <ShowcaseSearchView items={items as APIMovieResult[]} type="movie" />
    ),
    tv: <ShowcaseSearchView items={items as APITVResult[]} type="tv" />,
    person: <PeopleSearchView items={items as APIPersonResult[]} />,
  }[type]

  let htmlContent = null
  if (status == "pending") {
    htmlContent = SkeletonView
  } else if (status == "rejected" || data == null) {
    htmlContent = <CommonErrorMessage />
  } else {
    htmlContent = View
  }

  return (
    <CommonLayout search={query} title={titleMap[type]}>
      {htmlContent}
      <div className="flex justify-center">
        {items.length < totalItems && (
          <Pagination
            totalItems={totalItems}
            onPageChange={(page) => setPage(page)}
            defaultPage={+page}
            key={query + type}
          />
        )}
      </div>
    </CommonLayout>
  )
}

function CommonLayout({
  children,
  title,
  search,
}: {
  children: React.ReactNode
  title: string
  search: string
}) {
  return (
    <section className="mt-8 space-y-8 section">
      <h2 className="text-center title">{title}</h2>
      <div className="max-w-3xl mx-auto lg:hidden">
        <SearchForm />
      </div>
      <div className="space-y-2">
        <p className="px-1 mx-auto rounded-sm bg-gradient-to-r from-slate-600 to-slate-500 w-fit">
          Search results for{" "}
          <b className="font-display text-gradient-primary">{search}</b>
        </p>
        <BackgroundWall>{children}</BackgroundWall>
      </div>
    </section>
  )
}
