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
    <div className="entries-container">
      <h2 className="page-header-title">Contact Form Entries</h2>
      <div className="entries-map">
        {entries &&
          entries.map((entry) => {
            return (
              <EntryItem
                id={entry.id}
                name={entry.name}
                email={entry.email}
                message={entry.message}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Entries;
