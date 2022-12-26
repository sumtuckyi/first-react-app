import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Nav from "../components/nav_bar";

function Home() {
  const [loading, set_loading] = useState(true);
  const [movies, set_movies] = useState([]);
  const get_Movies = async () => {
    const json = await (
        await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
        )
    ).json();
    set_movies(json.data.movies);
    set_loading(false);
  };
  
  useEffect(()=> {
    get_Movies();
  }, []);

  return (
    <div>
      <Nav />  
      {loading ? (
      <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie 
              key={movie.id}
              id={movie.id}
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
