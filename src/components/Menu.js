import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <h1> Gift of Sharing</h1>
      <div>
        <Link to="/stores">List of the participating stores</Link>
      </div>
      <div>
        <Link to="/shelters">Homeless Shelters</Link>
      </div>
      <div>
        <Link to="/newstore">Your Store Page</Link>
      </div>
    </>
  );
}
