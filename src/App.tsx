import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import PrivacyPolicy from "./pages/privacyPolicy";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/policy" element={<PrivacyPolicy />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
