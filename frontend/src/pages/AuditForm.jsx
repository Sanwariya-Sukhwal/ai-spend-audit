import { useEffect, useState } from "react";

export default function AuditForm() {
  const [form, setForm] = useState({
    tool: "",
    plan: "",
    monthlySpend: "",
    seats: "",
    teamSize: "",
    useCase: "",
  });

  // Load saved data on page load
  useEffect(() => {
    const saved = localStorage.getItem("audit-form");
    if (saved) {
      setForm(JSON.parse(saved));
    }
    document.title = "AI Spend Audit";
  }, []);

  // Handle input change
  const handleChange = (e) => {
    let updated = {
      ...form,
      [e.target.name]: e.target.value,
    };

    // UX FIX: reset plan when tool changes
    if (e.target.name === "tool") {
      updated.plan = "";
    }

    setForm(updated);
    localStorage.setItem("audit-form", JSON.stringify(updated));
  };

  // Submit handler
  const handleSubmit = () => {
    if (!form.tool || !form.plan) {
      alert("Please fill all required fields");
      return;
    }

    console.log("Form Data:", form);
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-6">
      
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white p-6 rounded-xl shadow-lg">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-2">
          AI Spend Audit
        </h1>

        <p className="text-sm text-gray-300 mb-6 text-center">
          Analyze your AI tool spending and discover savings opportunities.
        </p>

        {/* TOOL SELECT */}
        <select
          name="tool"
          value={form.tool}
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded bg-black/30 border border-gray-500"
        >
          <option value="">Select Tool</option>
          <option value="ChatGPT">ChatGPT</option>
          <option value="Claude">Claude</option>
          <option value="Cursor">Cursor</option>
          <option value="Copilot">GitHub Copilot</option>
          <option value="Gemini">Gemini</option>
        </select>

        {/* PLAN SELECT */}
        <select
          name="plan"
          value={form.plan}
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded bg-black/30 border border-gray-500"
        >
          <option value="">Select Plan</option>

          {form.tool === "ChatGPT" && (
            <>
              <option value="Plus">Plus</option>
              <option value="Team">Team</option>
              <option value="Enterprise">Enterprise</option>
            </>
          )}

          {form.tool === "Cursor" && (
            <>
              <option value="Hobby">Hobby</option>
              <option value="Pro">Pro</option>
              <option value="Business">Business</option>
            </>
          )}

          {form.tool === "Claude" && (
            <>
              <option value="Free">Free</option>
              <option value="Pro">Pro</option>
              <option value="Team">Team</option>
            </>
          )}
        </select>

        {/* Monthly Spend */}
        <input
          type="number"
          name="monthlySpend"
          placeholder="Monthly Spend ($)"
          value={form.monthlySpend}
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded bg-black/30 border border-gray-500"
        />

        {/* Seats */}
        <input
          type="number"
          name="seats"
          placeholder="Number of Seats"
          value={form.seats}
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded bg-black/30 border border-gray-500"
        />

        {/* Team Size */}
        <input
          type="number"
          name="teamSize"
          placeholder="Team Size"
          value={form.teamSize}
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded bg-black/30 border border-gray-500"
        />

        {/* Use Case */}
        <select
          name="useCase"
          value={form.useCase}
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded bg-black/30 border border-gray-500"
        >
          <option value="">Select Use Case</option>
          <option value="Coding">Coding</option>
          <option value="Writing">Writing</option>
          <option value="Research">Research</option>
          <option value="Data Analysis">Data Analysis</option>
          <option value="Mixed">Mixed</option>
        </select>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full py-2 mt-2 rounded font-semibold text-white 
          bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90"
        >
          Run Audit
        </button>
      </div>
    </div>
  );
}