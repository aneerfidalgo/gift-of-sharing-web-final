import { Link } from "react-router-dom";
import Menu from "./Menu";
// import Footer from "./Footer";
import "../styles/hero.css";

export default function Hero() {
  return (
    <>
      <Menu />
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <h1></h1>
          <p>
            We believe in conserving food, and not letting overflow control the
            decision of who sleeps on an empty stomach
          </p>
        </div>
        <div class="col-6 mx-auto">
          <button class="btn btn-danger" type="button">
            <Link to="/shelters" className="btn-text">
              Stop wasting food Today!
            </Link>
          </button>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}
