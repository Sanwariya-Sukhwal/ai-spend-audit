import { useEffect, useState } from "react";
import { runAudit } from "../utils/auditEngine";
import { useNavigate } from "react-router-dom";

export default function AuditForm() {

  const navigate = useNavigate();

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

    // Reset plan when tool changes
    if (e.target.name === "tool") {
      updated.plan = "";
    }

    setForm(updated);

    localStorage.setItem(
      "audit-form",
      JSON.stringify(updated)
    );
  };

  // Submit handler
  const handleSubmit = () => {

    // Validation
    if (!form.tool || !form.plan) {

      alert("Please fill all required fields");

      return;
    }

    // Run Audit Engine
    const result = runAudit({

      ...form,

      monthlySpend: Number(form.monthlySpend),

      seats: Number(form.seats),

      teamSize: Number(form.teamSize),
    });

    console.log("Audit Result:", result);

    // Navigate to Results Page
    navigate("/results", {

      state: {

        form,

        result
      }
    });
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-6">

      <div className="w-full max-w-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white p-6 rounded-xl shadow-lg">

        {/* TITLE */}

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
          className="w-full p-3 mb-4 rounded bg-black/30 border border-gray-500 outline-none"
        >

          <option value="">
            Select Tool
          </option>

          <option value="ChatGPT">
            ChatGPT
          </option>

          <option value="Claude">
            Claude
          </option>

          <option value="Cursor">
            Cursor
          </option>

          <option value="GitHub Copilot">
            GitHub Copilot
          </option>

          <option value="Gemini">
            Gemini
          </option>

        </select>

        {/* PLAN SELECT */}

        <select
          name="plan"
          value={form.plan}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-black/30 border border-gray-500 outline-none"
        >

          <option value="">
            Select Plan
          </option>

          {/* CHATGPT */}

          {form.tool === "ChatGPT" && (
            <>
              <option value="Plus">
                Plus
              </option>

              <option value="Team">
                Team
              </option>

              <option value="Enterprise">
                Enterprise
              </option>
            </>
          )}

          {/* CURSOR */}

          {form.tool === "Cursor" && (
            <>
              <option value="Hobby">
                Hobby
              </option>

              <option value="Pro">
                Pro
              </option>

              <option value="Business">
                Business
              </option>
            </>
          )}

          {/* CLAUDE */}

          {form.tool === "Claude" && (
            <>
              <option value="Free">
                Free
              </option>

              <option value="Pro">
                Pro
              </option>

              <option value="Team">
                Team
              </option>

              <option value="Enterprise">
                Enterprise
              </option>
            </>
          )}

          {/* GEMINI */}

          {form.tool === "Gemini" && (
            <>
              <option value="Pro">
                Pro
              </option>

              <option value="Ultra">
                Ultra
              </option>
            </>
          )}

          {/* COPILOT */}

          {form.tool === "GitHub Copilot" && (
            <>
              <option value="Individual">
                Individual
              </option>

              <option value="Business">
                Business
              </option>
            </>
          )}

        </select>

        {/* MONTHLY SPEND */}

        <input
          type="number"
          name="monthlySpend"
          placeholder="Monthly Spend ($)"
          value={form.monthlySpend}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-black/30 border border-gray-500 outline-none"
        />

        {/* SEATS */}

        <input
          type="number"
          name="seats"
          placeholder="Number of Seats"
          value={form.seats}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-black/30 border border-gray-500 outline-none"
        />

        {/* TEAM SIZE */}

        <input
          type="number"
          name="teamSize"
          placeholder="Team Size"
          value={form.teamSize}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-black/30 border border-gray-500 outline-none"
        />

        {/* USE CASE */}

        <select
          name="useCase"
          value={form.useCase}
          onChange={handleChange}
          className="w-full p-3 mb-6 rounded bg-black/30 border border-gray-500 outline-none"
        >

          <option value="">
            Select Use Case
          </option>

          <option value="Coding">
            Coding
          </option>

          <option value="Writing">
            Writing
          </option>

          <option value="Research">
            Research
          </option>

          <option value="Data Analysis">
            Data Analysis
          </option>

          <option value="Mixed">
            Mixed
          </option>

        </select>

        {/* BUTTON */}

        <button
          onClick={handleSubmit}
          className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 transition duration-300"
        >

          Run Audit

        </button>

      </div>

    </div>
  );
}