import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/ui/HomePage";
import ProfilePage from "../pages/Profile/ui/ProfilePage";
import Layout from "./Layout/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
