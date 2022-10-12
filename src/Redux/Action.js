export const Add_Contact = "Add_Contact";
export const delete_Contact = "delete_Contact";

export const AddAction = (data) => {
  return {
    type: Add_Contact,
    payload: data,
  };
};

export const delAction = (val) => {
  return {
    type: delete_Contact,
    payload: val,
  };
};
