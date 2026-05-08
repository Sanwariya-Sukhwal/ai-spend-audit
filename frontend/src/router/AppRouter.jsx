import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuditForm from "../pages/AuditForm";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuditForm />} />
      </Routes>
    </BrowserRouter>
  );
}