import Logo from "../components/Logo"
import { contactInfo, inspiredBy } from "../constants"

function Footer() {
  return (
    <section className="space-y-12 section">
      <h2 className="flex justify-center gap-2 text-3xl text-center text-gradient-primary">
        About <Logo />
      </h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex flex-col items-center gap-8">
          <section className="p-2 space-y-3 text-center border-2 rounded-lg md:border-0">
            <h4>Who am i?</h4>
            <p className="max-w-[48ch] text-balance mx-auto">
              I am a student who is learning web development. This is my super
              cool <b className="text-sky-300">ReactJS</b> first project, so it
              is not perfect. I hope you can give me some suggestions to improve
              it.
            </p>
            <ul className="space-y-3">
              <h5>You can contact me via:</h5>
              {contactInfo.map((info) => (
                <li
                  key={info.link}
                  className="flex items-center justify-center gap-2 text-lg"
                >
                  {info.icon}
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-primary-500 underline-offset-2"
                  >
                    {info.text}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <section className="space-y-3 text-center">
          <h4 className="text-xl text-center text-balance">
            MoShows is just a webapp for{" "}
            <b className="text-primary-500">practical purpose</b> only, any
            commercial functionalities (if presents) is only for{" "}
            <b className="text-primary-500">demonstration</b>.
          </h4>
          <div className="p-2 space-y-2 border-2 rounded-lg md:border-0">
            <p>
              This app use{" "}
              <a
                href="https://developer.themoviedb.org/reference/intro/getting-started"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-primary-500 underline-offset-2"
              >
                TMDB API
              </a>{" "}
              for all data.
            </p>
            <ul>
              <h6 className="mb-2">Inspired by:</h6>
              {inspiredBy.map((item) => (
                <li key={item.link} className="text-lg">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-primary-500 underline-offset-2"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <p className="text-lg text-center">
        &copy;<b>MoShows {new Date().getFullYear()}</b>
      </p>
    </section>
  )
}

export default Footer
