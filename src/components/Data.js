import PropTypes from "prop-types";

function Data({smallImg, title, lang, rating, runtime, description}) {
    return (
        <div>
            <img src={smallImg} alt={title} />
            <h2>{title}</h2>
            <h3>{`Language: ${lang}`}</h3>
            <h3>{`Rating: ${rating}`}</h3>
            <h3>{`Runtime: ${runtime} min`}</h3>
            <p>{description}</p>
        </div>
    );
};

Data.propTypes = {
    smallImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired, 
};

export default Data;