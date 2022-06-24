import React, { useEffect, useState } from "react";
import parseJwt from "../Helpers/authHelper";
import { useNavigate } from "react-router-dom";

const Listings = () => {
  let history = useNavigate();
  const token = sessionStorage.getItem("token");
  const user = parseJwt(token).username;
  const [listing, setListing] = useState([]);
  const logout = (event) => {
    event.preventDefault();
    sessionStorage.removeItem("token");
    history.push("/login");
  };
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "http://localhost:4000/contact_form/entries",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setListing(data);
    };
    getData();
  }, [token]);
  return (
    <div>
      <h1>Listings for user: {user}</h1>
      {listing.length === 0 && <p>No listings found</p>}
      {listing.length > 0 &&
        listing.map((entry) => (
          <div>
            <p>{entry.id}</p>
            <p>{entry.name}</p>
            <p>{entry.phoneNumber}</p>
            <p>{entry.email}</p>
          </div>
        ))}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Listings;
