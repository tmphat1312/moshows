# MoShows - Movies and TV shows trailer showcase

With [TMDB API](https://developer.themoviedb.org/reference/intro/getting-started), MoShows showcases a wide range collection of trailers. MoShows let movie or TV show lovers find the one they are going to watch next, all made easy with sort, filter, and search. (*This is a project for practical purposes only*)

## Live Preview Photo
![Live site](./public/live-demo.png)

## If you're interested in MoShows
You can fork or clone this repo and follow [Installation guide](#Installation)

Or just take a look at the live [deployed one](https://minhphat-moshows.netlify.app/)


## Features
* Custom carousel is every on `MoShows`, pardon me if you find them cumbersome
* Tab switch
* Sticky header
* Client routing
* Skeleton loading (*At first, I thought this is the most complicated thing I would work on. After some research, it turned out to be the simplest*)
* Pagination (server side)
* Sorting
* Filtering
* Video player modal

To name a few, head to [live site](https://minhphat-moshows.netlify.app/) to explore more and all are made possible by [What I used](##)

## Installation
`yarn` or `npm` (note that you should remove `yarn.lock` first to use `npm`)

  1. Navigate to the project directory (you've forked or cloned) and install dependencies
```bash
cd <prj-dir>
```

```bash
yarn # npm install
```
  2. Set up environment variables

-  First, create `.env` file
- Include these variables (head to [TMDB API](https://developer.themoviedb.org/docs) to get your API key and API access token)
```env
# API Key
VITE_TMDB_TOKEN = <your API key, apologize for the misleading name :((>
VITE_TMDB_ACCESS_TOKEN = <your API Acess token>

# App related
VITE_APP_TITLE=<your title>
VITE_APP_BASE_API=https://api.themoviedb.org/3

# Image base
VITE_TMDB_CAST_BASE_URL=https://www.themoviedb.org/t/p/w138_and_h175_face/
VITE_TMDB_IMG_1X_BASE_URL=https://www.themoviedb.org/t/p/w220_and_h330_face/
VITE_TMDB_IMG_2X_BASE_URL=https://www.themoviedb.org/t/p/w440_and_h660_face/
VITE_TMDB_BD_1X_BASE_URL=https://www.themoviedb.org/t/p/w355_and_h200_face/
VITE_TMDB_BD_2X_BASE_URL=https://www.themoviedb.org/t/p/w710_and_h400_face/
VITE_TMDB_PF_1X_BASE_URL=https://www.themoviedb.org/t/p/w235_and_h235_face/
VITE_TMDB_PF_2X_BASE_URL=https://www.themoviedb.org/t/p/w470_and_h470_face/
VITE_TMDB_PD_BASE_URL=https://image.tmdb.org/t/p/w500
VITE_TMDB_POS_1X_BASE_URL=https://www.themoviedb.org/t/p/w300_and_h450_bestv2
VITE_TMDB_POS_2X_BASE_URL=https://www.themoviedb.org/t/p/w600_and_h900_bestv2
VITE_TMDB_HERO_BASE_URL=https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/
```

  3. Run the local server and do whatever you want
```bash
yarn dev # npm run dev
```

## What I used
* [![React][React.js]][React-url]
* [![Tailwindcss][Tailwindcss]][Tailwind-url]
* [![Zustand][Zustand]][Zustand-url]
* [![Axios][Axios]][Axios-url]
* [![ReactIcons][ReactIcons]][ReactIcons-url]
* [![ReactRouter][ReactRouter]][ReactRouter-url]

## Feedback for improvement

If you have any feedback, please reach out to me at
* Email: [tmphat1312@gmail.com](mailto:tmphat1312@gmail.com)
* Facebook: [Minh Phat](https://www.facebook.com/tmphat1312/)
* Or just open an issue here

## Project status
`It's all basically done, but I'm willing to make some improvements if I have time`

`Any feedback is appreciated`

## License


This project is licensed under the [GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/) license.

[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwindcss]: https://img.shields.io/badge/Tailwindcss-20232A?style=for-the-badge&logo=tailwindcss&logoColor=61DAFB
[Tailwind-url]: https://tailwindcss.com/
[Zustand]: https://img.shields.io/badge/Zustand-20232A?style=for-the-badge&logoColor=61DAFB
[Zustand-url]: https://docs.pmnd.rs/zustand/getting-started/introduction
[Axios]: https://img.shields.io/badge/Axios-20232A?style=for-the-badge&logoColor=7d3ee4&logo=axios
[Axios-url]: https://axios-http.com/
[ReactIcons]: https://img.shields.io/badge/ReactIcons-20232A?style=for-the-badge&logoColor=fe52c0&logo=react
[ReactIcons-url]: https://react-icons.github.io/react-icons/
[ReactRouter]: https://img.shields.io/badge/ReactRouter-20232A?style=for-the-badge&logoColor=f44250&logo=react-router
[ReactRouter-url]: https://reactrouter.com/en/main