import { types } from "../types"

const initialState = {
  numbers: [],
};

export default function numberReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_NUMBER:
      return {...state, numbers: [...state.numbers, action.payload],};
    case types.CLEAR_NUMBERS:
      return {...state, numbers: [],};
    default: return state;
  }
}

 
