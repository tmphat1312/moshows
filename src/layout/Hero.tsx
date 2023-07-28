import heroBg from "../assets/images/hero-bg.webp"
import heroIll from "../assets/images/hero-illustration.svg"

function Hero() {
  return (
    <section className="relative section-separator">
      <div>
        <img
          src={heroBg}
          alt="Poster of movies and TV shows trailers available on MoShows webapp"
          className="object-cover w-full h-screen"
        />
      </div>
      <div className="absolute inset-0 grid bg-gradient-to-b from-black to-black/50">
        <div className="grid items-center h-full md:grid-cols-2 app-width">
          <div className="space-y-8 text-center drop-shadow-lg">
            <h1 className="text-6xl xl:text-start ">
              Welcome to{" "}
              <span className="italic underline text-primary-500">MoShows</span>
            </h1>
            <p className="text-2xl tracking-wider">
              Let us awake your internal desire to watch movies and TV shows
              with a great number of trailers
            </p>
            <div className="flex justify-center gap-8">
              <button className="btn btn--large btn--primary">
                Browse now
              </button>
              <button className="btn btn--large">sign me up</button>
            </div>
          </div>
          <div className="hidden h-1/2 md:block">
            <img
              src={heroIll}
              alt="Logo of MoShows"
              className="h-full ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
