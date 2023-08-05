import { AiFillFacebook, AiFillGithub, AiTwotoneMail } from "react-icons/ai"
import Logo from "../components/Logo"

// TODO: render footer content programmatically
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
              cool <b className="text-sky-600">ReactJS</b> first project, so it
              is not perfect. I hope you can give me some suggestions to improve
              it.
            </p>
            <ul className="space-y-3">
              <h5>You can contact me via:</h5>
              <li className="flex items-center justify-center gap-2 text-lg">
                <AiFillFacebook />
                <a
                  className="hover:underline hover:text-primary-500 underline-offset-2"
                  href="https://www.facebook.com/tmphat1312"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  tmphat1312
                </a>
              </li>
              <li className="flex items-center justify-center gap-2 text-lg">
                <AiTwotoneMail />
                <a
                  className="hover:underline hover:text-primary-500 underline-offset-2"
                  href="mailto:tmphat1312@gmail.com"
                >
                  tmphat1312@gmail.com
                </a>
              </li>
              <li className="flex items-center justify-center gap-2 text-lg">
                <AiFillGithub />
                <a
                  className="hover:underline hover:text-primary-500 underline-offset-2"
                  href="https://github.com/tmphat1312"
                  rel="noopener noreferrer"
                >
                  tmphat1312
                </a>
              </li>
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
              <h6>Inspired by:</h6>
              <li>
                <a
                  href="https://movix-eta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-primary-500 underline-offset-2"
                >
                  Movix
                </a>
              </li>
              <li>
                <a
                  href="https://fluffy-lamington-7d6a24.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-primary-500 underline-offset-2"
                >
                  BingeTown
                </a>
              </li>
              <li>
                <a
                  href="https://bluebirdmovies.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-primary-500 underline-offset-2"
                >
                  BlueBird Movies
                </a>
              </li>
              <li>
                <a
                  href="https://developer.themoviedb.org/reference/intro/getting-started"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-primary-500 underline-offset-2"
                >
                  The Movie Database
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <p className="text-center">
        &copy; <b>MoShows {new Date().getFullYear()}</b>
      </p>
    </section>
  )
}

export default Footer
