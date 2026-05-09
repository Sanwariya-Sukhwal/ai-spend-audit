export function runAudit(form) {

  let recommendation = "";
  let savings = 0;
  let reason = "";
  let riskLevel = "Low";

  /*
      CHATGPT RULES
  */

  if (
    form.tool === "ChatGPT" &&
    form.plan === "Team" &&
    form.teamSize <= 2
  ) {

    recommendation = "Switch to Plus";

    savings = 20;

    reason =
      "Small teams usually don't require Team collaboration features.";

    riskLevel = "Medium";
  }

  else if (
    form.tool === "ChatGPT" &&
    form.plan === "Enterprise" &&
    form.teamSize < 10
  ) {

    recommendation = "Downgrade to Team";

    savings = 30;

    reason =
      "Enterprise plans are generally useful for larger organizations.";

    riskLevel = "High";
  }

  /*
      CLAUDE RULES
  */

  else if (
    form.tool === "Claude" &&
    form.plan === "Team" &&
    form.seats <= 2
  ) {

    recommendation = "Use Claude Pro";

    savings = 10;

    reason =
      "Claude Team may be excessive for very small teams.";

    riskLevel = "Medium";
  }

  else if (
    form.tool === "Claude" &&
    form.plan === "Enterprise" &&
    form.monthlySpend < 100
  ) {

    recommendation = "Move to Claude Team";

    savings = 25;

    reason =
      "Enterprise cost is high compared to current usage.";

    riskLevel = "High";
  }

  /*
      CURSOR RULES
  */

  else if (
    form.tool === "Cursor" &&
    form.plan === "Business" &&
    form.seats <= 2
  ) {

    recommendation = "Switch to Cursor Pro";

    savings = 20;

    reason =
      "Business plan is unnecessary for small development teams.";

    riskLevel = "High";
  }

  else if (
    form.tool === "Cursor" &&
    form.plan === "Pro" &&
    form.seats === 1
  ) {

    recommendation = "Evaluate Hobby Plan";

    savings = 10;

    reason =
      "Single users may not need advanced Pro features.";

    riskLevel = "Low";
  }

  /*
      GITHUB COPILOT RULES
  */

  else if (
    form.tool === "GitHub Copilot" &&
    form.plan === "Business" &&
    form.teamSize <= 3
  ) {

    recommendation = "Switch to Individual";

    savings = 9;

    reason =
      "Business features may not justify cost for small teams.";

    riskLevel = "Medium";
  }

  /*
      GEMINI RULES
  */

  else if (
    form.tool === "Gemini" &&
    form.plan === "Ultra" &&
    form.monthlySpend < 50
  ) {

    recommendation = "Downgrade to Gemini Pro";

    savings = 30;

    reason =
      "Gemini Ultra appears underutilized based on current spending.";

    riskLevel = "Medium";
  }

  /*
      DEFAULT RULE
  */

  else {

    recommendation =
      "Current setup looks optimized";

    savings = 0;

    reason =
      "No major savings opportunities detected.";

    riskLevel = "Low";
  }

  return {

    recommendation,

    savings,

    annualSavings: savings * 12,

    reason,

    riskLevel
  };
}