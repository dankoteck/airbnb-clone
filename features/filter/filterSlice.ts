import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppState } from "~/store";

export type TypeOfPlace = "all" | "rooms" | "homes";

export type InitialState = {
  typeOfPlace: TypeOfPlace;
};

const initialState: InitialState = {
  typeOfPlace: "all",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTypeOfPlace: (state, action: PayloadAction<TypeOfPlace>) => {
      state.typeOfPlace = action.payload;
    },
  },
});


// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

export const selectFilter = (state: AppState) => state.filter;

export const { setTypeOfPlace } = filterSlice.actions;

export default filterSlice.reducer;
