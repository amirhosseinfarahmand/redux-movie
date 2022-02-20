import { img_300 } from "../services/http";
import "./MovieBox.css";
import { useState } from "react";
import { FaImdb } from "react-icons/fa";

const MovieBox = ({ state }) => {
  const [style, setStyle] = useState();

  return (
    <div className="movieSection">
      <div className="title">
        <p>{state.original_title}</p>
      </div>
      <div>
        <img src={`${img_300}${state.poster_path}`} />
      </div>
      <div className="test">
        <div className="info">
          <p>
            <FaImdb className="react-icons" color="red" />
            {state.vote_average}
          </p>
          <span>{state.overview.slice(0, 150)}...</span>
          <button>More Info</button>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
