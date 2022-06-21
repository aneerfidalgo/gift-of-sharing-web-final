import ShelterList from "./components/ShelterList";
import StoreList from "./components/StoreList";
import NewStoreForm from "./components/NewStoreForm";
import Hero from "./components/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Hero />} />
          <Route path="shelters" element={<ShelterList />} />
          <Route path="stores" element={<StoreList />} />
          <Route path="newstore" element={<NewStoreForm />} />

          {/* <Route path="shelter/:id" element={<ShelterList />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
