import { useEffect, useState } from "react";

export default function ShelterList() {
  const [shelters, setShelters] = useState([]);
  useEffect(() => {
    fetch("https://gift-of-sharing-af.web.app/shelters")
      .then((res) => res.json())
      .then((data) => setShelters(data));
  }, []);
  console.log(shelters);
  return (
    <>
      {shelters.map((shelter, i) => {
        return (
          <div key={i}>
            <h1>{shelter.name}</h1>
            <p>{shelter.address}</p>
            <p>{shelter.phone}</p>
            <a href={shelter.website}>Donate Now</a>
          </div>
        );
      })}
    </>
  );
}
