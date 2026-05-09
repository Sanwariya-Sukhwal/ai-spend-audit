import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuditForm from "../pages/AuditForm";
import Results from "../pages/Results";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuditForm />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}