import { useEffect, useState } from "react";
import Footer from "./Footer";
import Menu from "./Menu";
import "../styles/shelterList.css";

export default function ShelterList() {
  // Fetch all the shelters
  const [shelters, setShelters] = useState([]);
  useEffect(() => {
    fetch("https://gift-of-sharing-af.web.app/shelters")
      .then((res) => res.json())
      .then((data) => setShelters(data));
  }, []);

  return (
    <>
      <Menu />
      <div className="container">
        <div className="row">
          {shelters?.map((shelter, i) => {
            return (
              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body" key={i}>
                    <h1 className="header-text">{shelter.name}</h1>
                    <img
                      style={{ width: "100%", height: "300px" }}
                      src={shelter.image}
                    ></img>
                    <p className="card-text"> {shelter.address}</p>
                    <p className="card-text">{shelter.phone}</p>
                    <a href={shelter.website}>Donate Now</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

// <div class="card-body">
//   <p class="card-text"></p>
//   <div class="d-flex justify-content-between align-items-center">
//     <div class="btn-group">
//       <button type="button" class="btn btn-sm btn-outline-secondary"></button>
//       <button type="button" class="btn btn-sm btn-outline-secondary"></button>
//     </div>
//     <small class="text-muted">shelterlist</small>
//   </div>
// </div>;
