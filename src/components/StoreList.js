import { useEffect, useState } from "react";

export default function StoreList() {
  // Fetch all the stores
  const [stores, setStores] = useState([]);
  useEffect(() => {
    fetch("https://gift-of-sharing-af.web.app/stores")
      .then((res) => res.json())
      .then((data) => setStores(data));
  }, []);

  return (
    <>
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
