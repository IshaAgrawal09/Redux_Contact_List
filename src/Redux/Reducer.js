import { Add_Contact, delete_Contact } from "./Action";
const initialState = {
  show_Table: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_Contact:
      return {
        ...state,
        show_Table: [...add(state.show_Table, action.payload)],
      };
    case delete_Contact:
      return {
        ...state,
        show_Table: [...del(state.show_Table, action.payload)],
      };
    default:
      return {
        ...state,
      };
  }
};

function add(arr, data) {
  console.log(data);
  arr.push(data);
  return arr;
}

function del(arr, idx) {
  arr.splice(idx, 1);
  console.log(arr);
  return arr;
}

export default reducer;
