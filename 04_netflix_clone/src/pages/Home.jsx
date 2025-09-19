import React from 'react'
import { Section} from "../components/index.js";
import movies from '../data/movie.js';
import tvshows from "../data/tvshows.js";
import kdramas from "../data/kdrama.js";
import olds from "../data/old.js";

function Home() {
  return (
    <div className="bg-gray-900 text-white px-4">
     <Section title="Trending Now" items={movies} />
     <Section title="Popular Movies" items={tvshows} />
      <Section title="Upcoming" items={kdramas} />
           <Section title="Old" items={olds} />
    </div>
  )
}

export default Home
