import NavBar from "../Navigation/NavBar";
import axios from "axios";
import { useState, useEffect } from "react";
import MovieBox from "../../common/MovieBox";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncMovie } from "../OurRedux";
import PaginationApp from "../Pagination/PaginationApp";
import { useNavigate } from "react-router-dom";
import { setAllData } from "../OurRedux";

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.movie.items);
  const [page, setPage] = useState(1);
  const backData = useSelector((state) => state.movie.backItems);

  useEffect(() => {
    dispatch(getAsyncMovie(page));
  }, [page]);

  const backHome = () => {
    dispatch(setAllData(backData));
  };

  return (
    <main>
      <NavBar />
      <div className="mainBox">
        {items.length ? (
          items.map((state) => <MovieBox state={state} />)
        ) : (
          <div className="error">
            <h2>No Movies Found!</h2>
          </div>
        )}
      </div>
      <div className="pagination">
        {items.length ? (
          <PaginationApp setPage={setPage} />
        ) : (
          <button onClick={backHome} className="back-button">
            back to home
          </button>
        )}
      </div>
    </main>
  );
};
export default Home;
