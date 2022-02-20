import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncMovie = createAsyncThunk(
  "movie/getAsyncMovie",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=e9b577e54e388326146a10c5441ab9a3&page=${payload}`
      );
      console.log(payload);
      return response.data.results;
    } catch (error) {}
  }
);

export const searchTitle = createAsyncThunk(
  "movie/searchTitle",
  async (payload, { rejectWithValue }) => {
    return payload;
  }
);

export const searchScore = createAsyncThunk(
  "movie/searchScore",
  async (payload, { rejectWithValue }) => {
    return payload;
  }
);

const OurRedux = createSlice({
  name: "movie",
  initialState: { value: "", items: [], backItems: [] },

  reducers: {
    insideInput: (state, action) => {
      state.value = action.payload;
    },
    setAllData: (state, action) => {
      state.items = action.payload;
    },
  },

  extraReducers: {
    [getAsyncMovie.fulfilled]: (state, action) => {
      return { ...state, items: action.payload, backItems: action.payload };
    },
    [searchTitle.fulfilled]: (state, action) => {
      if (action.payload) {
        const filter = state.backItems.filter((items) => {
          return items.original_title
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        });
        state.items = filter;
        console.log(filter, current(state));
      } else {
        state.items = state.backItems;
      }
    },
    [searchScore.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { insideInput, setAllData } = OurRedux.actions;
export default OurRedux.reducer;
