import "./App.css";
import CatsListing from "./pages/CatsListing";
import RandomTweet from "./pages/RandomTweet";
import RandomUser from "./pages/RandomUser";
import { Route, Routes } from "react-router-dom";

function App() {
  const isDark = window.location.href.includes("/random-user");

  return (
    <div
      className={`w-full h-screen flex justify-center items-center ${
        isDark ? "bg-black" : "bg-gray-500"
      }`}
    >
      <Routes>
        <Route path="/cats-listing" element={<CatsListing />} />
        <Route path="/random-user" element={<RandomUser />} />
        <Route path="/random-jokes" element={<RandomTweet />} />
      </Routes>
    </div>
  );
}

export default App;
