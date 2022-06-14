import ShelterList from "./components/ShelterList";
import StoreList from "./components/StoreList";
import NewStoreForm from "./components/NewStoreForm";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="shelters" element={<ShelterList />} />
          <Route path="stores" element={<StoreList />} />
          <Route path="newstore" element={<NewStoreForm />} />
          {/* <Route path="shelter/:id" element={<ShelterList />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
