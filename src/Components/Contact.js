import React, { useState } from "react";
import { connect } from "react-redux";
import { AddAction, delAction } from "../Redux/Action";

const Contact = (props) => {
  const [data, setData] = useState({
    name: "",
    address: "",
    city: "",
    phone: "",
    email: "",
  });
  const [error, setError] = useState("");

  //   SUBMIT DATA
  const submitData = (event) => {
    event.preventDefault();
    if (!/^[a-zA-Z_ ]*$/.test(data.name)) {
      setData({ ...data, name: "" });
      setError("Name can't contain number or any special Character!");
    } else if (!/^[0-9]*$/.test(data.phone)) {
      setData({ ...data, phone: "" });
      setError("Mobile Number can only contains Numbers!");
    } else {
      setError("");
      props.AddAction(data);
      setData({
        name: "",
        address: "",
        city: "",
        phone: "",
        email: "",
      });
    }
  };
  //   REMOVE ITEM
  const remove = (indx) => {
    console.log("delete", indx);
    props.delAction(indx);
  };
  //console.log(props.show.length);
  return (
    <>
      <div className="contactMain">
        <h2>Add Contact</h2>
        <p id="error">{error}</p>
        <form onSubmit={(e) => submitData(e)}>
          <div>
            <p>Name: </p>
            <input
              required
              type="text"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div>
            <p>Address: </p>
            <input
              required
              type="text"
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
            />
          </div>
          <div>
            <p>City: </p>
            <input
              required
              type="text"
              value={data.city}
              onChange={(e) => setData({ ...data, city: e.target.value })}
            />
          </div>
          <div>
            <p>Phone No: </p>
            <input
              type="number"
              required
              minLength={10}
              maxLength={10}
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
          </div>
          <div>
            <p>Email: </p>
            <input
              required
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <input type="submit" className="submit" />
        </form>
      </div>
      <div className="show">
        {props.show.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>City</th>
                <th>Phone No.</th>
                <th>Email</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {props.show.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.city}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>
                      <button onClick={() => remove(index)}>
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : null}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  //   console.log(state);
  return {
    show: state.show_Table,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    AddAction: (value) => dispatch(AddAction(value)),
    delAction: (idx) => dispatch(delAction(idx)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
