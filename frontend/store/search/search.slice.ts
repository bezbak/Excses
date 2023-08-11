import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product } from '@/models';


interface SearchState {
  query: string;
  results: Product[];
}

const initialState: SearchState = {
  query: '',
  results: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
      console.log(action.payload)
    },
    setResults(state, action: PayloadAction<Product[]>) {
      state.results = action.payload;
    },
  },
});

export const { setQuery, setResults } = searchSlice.actions;

// export const selectQuery = (state: RootState) => state.search.query;
// export const selectResults = (state: RootState) => state.search.results;

export default searchSlice.reducer;
