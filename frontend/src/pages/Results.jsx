import { useLocation } from "react-router-dom";

export default function Results() {

  const { state } = useLocation();

  const { form, result } = state;

  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white p-8">

      <div className="max-w-5xl mx-auto">

        {/* HERO */}

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 mb-8 text-center shadow-2xl">

          <h1 className="text-5xl font-bold mb-4">

            You Could Save

          </h1>

          <h2 className="text-7xl font-extrabold text-green-400 mb-4">

            ${result.annualSavings}

          </h2>

          <p className="text-xl text-gray-300">

            per year with optimization

          </p>

        </div>

        {/* CARDS */}

        <div className="grid md:grid-cols-2 gap-6">

          {/* CURRENT TOOL */}

          <div className="bg-white/10 p-6 rounded-2xl border border-white/10">

            <h3 className="text-gray-400 mb-2">

              Current Tool

            </h3>

            <p className="text-3xl font-bold">

              {form.tool}

            </p>

          </div>

          {/* CURRENT PLAN */}

          <div className="bg-white/10 p-6 rounded-2xl border border-white/10">

            <h3 className="text-gray-400 mb-2">

              Current Plan

            </h3>

            <p className="text-3xl font-bold">

              {form.plan}

            </p>

          </div>

          {/* CURRENT SPEND */}

          <div className="bg-yellow-500/20 p-6 rounded-2xl border border-yellow-500">

            <h3 className="text-yellow-300 mb-2">

              Current Spend

            </h3>

            <p className="text-3xl font-bold">

              ${result.currentSpend}

            </p>

          </div>

          {/* OPTIMIZED SPEND */}

          <div className="bg-cyan-500/20 p-6 rounded-2xl border border-cyan-500">

            <h3 className="text-cyan-300 mb-2">

              Optimized Spend

            </h3>

            <p className="text-3xl font-bold">

              ${result.optimizedSpend}

            </p>

          </div>

          {/* RECOMMENDATION */}

          <div className="bg-green-500/20 p-6 rounded-2xl border border-green-500">

            <h3 className="text-green-300 mb-2">

              Recommendation

            </h3>

            <p className="text-2xl font-bold text-green-400">

              {result.recommendation}

            </p>

          </div>

          {/* MONTHLY SAVINGS */}

          <div className="bg-blue-500/20 p-6 rounded-2xl border border-blue-500">

            <h3 className="text-blue-300 mb-2">

              Monthly Savings

            </h3>

            <p className="text-3xl font-bold">

              ${result.monthlySavings}

            </p>

          </div>

          {/* ANNUAL SAVINGS */}

          <div className="bg-purple-500/20 p-6 rounded-2xl border border-purple-500">

            <h3 className="text-purple-300 mb-2">

              Annual Savings

            </h3>

            <p className="text-3xl font-bold">

              ${result.annualSavings}

            </p>

          </div>

                  {/* RISK LEVEL */}

          <div className="bg-red-500/20 p-6 rounded-2xl border border-red-500">

            <h3 className="text-red-300 mb-2">

              Risk Level

            </h3>

            <p className="text-3xl font-bold">

              {result.riskLevel}

            </p>

          </div>

        </div>



        {/* REASON */}

        <div className="mt-8 bg-white/10 p-8 rounded-2xl border border-white/10">

          <h3 className="text-2xl font-bold mb-4">

            Why This Recommendation?

          </h3>

          <p className="text-gray-300 text-lg leading-relaxed">

            {result.reason}

          </p>

        </div>



      </div>

    </div>
  );
}