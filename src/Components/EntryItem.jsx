import React from "react";

const EntryItem = (props) => {
  return (
    <div>
      <p>
        <span className="bold-key">ID:</span> {props.id}
      </p>
      <p>
        <span className="bold-key">NAME:</span> {props.name}
      </p>
      <p>
        <span className="bold-key">EMAIL:</span> {props.email}
      </p>
      <p>
        <span className="bold-key">MESSAGE:</span> {props.message}
      </p>
      <button className="crud-button">Delete</button>
      <button className="crud-button">Update</button>
      <button className="crud-button">Respond</button>
      <hr className="entry-hr" />
    </div>
  );
};

export default EntryItem;
