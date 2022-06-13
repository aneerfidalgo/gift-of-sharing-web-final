import { useEffect, useState } from "react";

export default function ShelterList() {
  // Fetch all the stores
  const [stores, setStores] = useState([]);
  useEffect(() => {
    fetch("https://gift-of-sharing-af.web.app/stores")
      .then((res) => res.json())
      .then((data) => setStores(data));
  }, []);

  // Fetch all the shelters
  const [shelters, setShelters] = useState([]);
  useEffect(() => {
    fetch("https://gift-of-sharing-af.web.app/shelters")
      .then((res) => res.json())
      .then((data) => setShelters(data));
  }, []);

  return (
    <>
      {shelters?.map((shelter, i) => {
        return (
          <div key={i}>
            <h1>{shelter.name}</h1>
            <p>{shelter.address}</p>
            <p>{shelter.phone}</p>
            <a href={shelter.website}>Donate Now</a>
          </div>
        );
      })}
      <h1>Stores Collection</h1>
      {stores?.map((store, i) => {
        return (
          <div key={i}>
            <h1>{store.name}</h1>
            <p>{store.address}</p>
            <p>{store.phone}</p>
            <a href={store.website}></a>
          </div>
        );
      })}
    </>
  );
}
