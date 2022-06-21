import { useEffect, useState } from "react";
import { ButtonToolbar } from "react-bootstrap";
import Menu from "./Menu";
import "../styles/storelist.css";

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
      <Menu />
      <h1>Stores Collection</h1>
      {/* <div className="dropdown" />
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenu2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {" "}
        Stores Collection
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu2" />
      <li></li>
       */}

      {stores?.map((store, i) => {
        return (
          <div key={i}>
            <h1>{store.name}</h1>
            <p>{store.address}</p>
            {/* <p>{store.phone}</p> */}
            <p>{store.description}</p>
            <p>{store.foodDetails}</p>
            <p>{store.schedule}</p>
            <a href={store.website}></a>
          </div>
        );
      })}
    </>
  );
}
