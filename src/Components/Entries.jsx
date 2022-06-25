import React, { useState, useEffect } from "react";
import EntryItem from "./EntryItem";

const Entries = () => {
  const [entries, setEntries] = useState([]);

  const contactFormEntries = [...entries];

  useEffect(() => {
    fetch("/contact_form/entries")
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
        {contactFormEntries &&
          contactFormEntries.map((entry) => {
            const val = Object.values(entry)[1];
            return (
              <EntryItem
                id={entry.id}
                name={val.name}
                email={val.email}
                message={val.message}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Entries;
