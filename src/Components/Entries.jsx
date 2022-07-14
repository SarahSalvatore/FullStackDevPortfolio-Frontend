import React, { useState, useEffect } from "react";
import EntryItem from "./EntryItem";

const Entries = () => {
  const [entries, setEntries] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/entries")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEntries(data);
      });
  }, []);

  return (
    <div className="form-container">
      <h2 className="page-header-title">Contact Form Entries</h2>
      <div className="projects-map">
        {entries &&
          entries.map((entries) => {
            return (
              <EntryItem
                id={entries.id}
                name={entries.name}
                email={entries.email}
                message={entries.message}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Entries;
