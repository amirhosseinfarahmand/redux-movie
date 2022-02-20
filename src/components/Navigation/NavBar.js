import "./Navigation.css";
import { useDispatch, useSelector } from "react-redux";
import { insideInput } from "../OurRedux";
import { useState } from "react";
import { searchTitle } from "../OurRedux";
import Select from "react-select";
import { searchScore } from "../OurRedux";
import { customStyles } from "../../style";
import { BiSearch } from "react-icons/bi";
import { setAllData } from "../OurRedux";

const NavBar = () => {
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const search = useSelector((items) => items.movie.value);
  const data = useSelector((state) => state.movie.items);
  const backData = useSelector((state) => state.movie.backItems);

  const imdbOption = [
    { value: "All", label: "All" },
    { value: "4>", label: "above 4" },
    { value: "4-5", label: "4-5" },
    { value: "5>", label: "above 5" },
    { value: "5-6", label: "5-6" },
    { value: "6>", label: "above 6" },
    { value: "6-7", label: "6-7" },
    { value: "7>", label: "above 7" },
    { value: "7-8", label: "7-8" },
    { value: "8>", label: "above 8" },
    { value: "8-9", label: "8-9" },
    { value: "9>", label: "above 9" },
  ];

  const filterImdb = (status) => {
    switch (status) {
      case "4>":
        dispatch(searchScore(data.filter((items) => items.vote_average > 4)));
        break;
      case "4-5":
        dispatch(
          searchScore(
            data.filter(
              (items) => items.vote_average > 4 && items.vote_average < 5
            )
          )
        );
        break;
      case "5>":
        dispatch(searchScore(data.filter((items) => items.vote_average > 5)));
        break;
      case "5-6":
        dispatch(
          searchScore(
            data.filter(
              (items) => items.vote_average > 5 && items.vote_average < 6
            )
          )
        );
        break;
      case "6>":
        dispatch(searchScore(data.filter((items) => items.vote_average > 6)));
        break;
      case "6-7":
        dispatch(
          searchScore(
            data.filter(
              (items) => items.vote_average > 6 && items.vote_average < 7
            )
          )
        );
        break;
      case "7>":
        dispatch(searchScore(data.filter((items) => items.vote_average > 7)));
        break;
      case "7-8":
        dispatch(
          searchScore(
            data.filter(
              (items) => items.vote_average > 7 && items.vote_average < 8
            )
          )
        );
        break;
      case "8>":
        dispatch(searchScore(data.filter((items) => items.vote_average > 8)));
        break;
      case "8-9":
        dispatch(
          searchScore(
            data.filter(
              (items) => items.vote_average > 8 && items.vote_average < 9
            )
          )
        );
        break;
      case "9>":
        dispatch(searchScore(data.filter((items) => items.vote_average > 9)));
        break;

      default:
        dispatch(searchScore(backData));
    }
  };

  const onChange = (e) => {
    filterImdb(e.value);
  };

  const enter = (e) => {
    if (e.charCode === 13) {
      dispatch(searchTitle(search));
      setValue("");
    }
  };

  const goSearch = () => {
    if (value) {
      dispatch(searchTitle(search));
      setValue("");
    } else {
      dispatch(setAllData(backData));
    }
  };

  const searchOnChange = (e) => {
    setValue(e.target.value);
    dispatch(insideInput(e.target.value));
  };

  return (
    <main className="nav-main">
      <div style={{ marginLeft: "20px", fontFamily: "cursive" }}>
        <h2>movie app</h2>
      </div>
      <div style={{ display: "flex" }}>
        <div className="selectOption">
          <Select
            options={imdbOption}
            placeholder="imdb score"
            onChange={onChange}
            styles={customStyles}
            className="selector"
          />
        </div>
        <div className="searchBox">
          <input
            value={value}
            onChange={searchOnChange}
            type="text"
            onKeyPress={enter}
            placeholder="find your movie..."
          />
          <button onClick={goSearch}>
            <BiSearch />
          </button>
        </div>
      </div>
    </main>
  );
};

export default NavBar;
