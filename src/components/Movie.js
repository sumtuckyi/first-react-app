import PropTypes from "prop-types";
import {Link } from "react-router-dom";

function Movie({coverImg, title, summary, genres}) {
    return (
        <div>
          <img src={coverImg} alt={title}/>
          <h2>
            <Link to="/movie">{title}</Link> 
          </h2>
          <p>{summary}</p>
          <ul>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div> 
    );
};

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}; //Movie라는 컴포넌트의 props의 데이터 타입을 PropTypes라는 메소드로 지정(유효성 검사) 

export default Movie;