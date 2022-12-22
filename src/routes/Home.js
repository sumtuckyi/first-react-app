import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, set_loading] = useState(true);
  const [movies, set_movies] = useState([]);
  useEffect(()=> {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => set_movies(json));
    set_loading(false);
  }, [])
  return (
    <div>
      {loading ? (
      <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie 
              key={movie.id}
              coverImg ={movie.medium_cover_image} 
              title={movie.title} 
              summary={movie.summary} 
              genres={movie.genres}
            />
          ))}
        </div> 
      )}
    </div>      
  );
}

export default Home;
