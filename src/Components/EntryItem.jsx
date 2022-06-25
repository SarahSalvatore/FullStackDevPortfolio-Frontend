import React from "react";

const EntryItem = (props) => {
  return (
    <div>
      <p>Id: {props.id}</p>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Message: {props.message}</p>
      <hr />
    </div>
  );
};

export default EntryItem;
