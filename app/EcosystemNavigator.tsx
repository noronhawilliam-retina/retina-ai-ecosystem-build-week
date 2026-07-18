"use client";

import { useMemo, useState } from "react";

const goals = {
  launch: {
    label: "Launch a digital presence",
    specialist: "Digital Presence Strategist",
    steps: ["Visual Identity", "Sites with AI", "SEO + GEO", "Content Studio"],
    outcome: "A coherent brand and conversion-ready presence, prepared for organic discovery.",
  },
  grow: {
    label: "Grow demand",
    specialist: "Performance & Growth Strategist",
    steps: ["Ads AI Manager", "SEO + GEO", "Content Studio", "Social Operations"],
    outcome: "A measurable acquisition plan that coordinates paid, organic and social channels.",
  },
  automate: {
    label: "Automate operations",
    specialist: "Automation & AI Operations Specialist",
    steps: ["Specialist Agents", "Content Studio", "Social Operations", "Sites with AI"],
    outcome: "A controlled workflow with clear routing, drafts, approvals and documented delivery.",
  },
  protect: {
    label: "Strengthen digital infrastructure",
    specialist: "Infrastructure & Security Specialist",
    steps: ["Specialist Agents", "Sites with AI", "SEO + GEO", "Visual Identity"],
    outcome: "A prioritized digital foundation with ownership, continuity and trust signals mapped.",
  },
  web3: {
    label: "Build a responsible Web3 initiative",
    specialist: "Blockchain Strategy & Implementation Specialist",
    steps: ["Blockchain Consultants", "Codex Token Generator", "RetinaCoin", "Sites with AI"],
    outcome: "A utility-first Web3 path that starts with expert discovery, validates the use case, uses the existing generator when appropriate and keeps compliance and human approval visible.",
  },
};

type GoalKey = keyof typeof goals;

export function EcosystemNavigator() {
  const [goal, setGoal] = useState<GoalKey>("grow");
  const [maturity, setMaturity] = useState("running");
  const [pace, setPace] = useState("guided");

  const plan = useMemo(() => {
    const selected = goals[goal];
    const opening = maturity === "starting"
      ? "Start with a shared discovery brief and ownership map."
      : maturity === "fragmented"
        ? "Audit existing tools and preserve working assets before migration."
        : "Use current performance signals as the baseline before changing multiple variables.";
    const cadence = pace === "fast"
      ? "Parallel discovery, sequential approvals."
      : pace === "guided"
        ? "One validated milestone at a time."
        : "Advisory plan first; implementation remains client-led.";
    return { ...selected, opening, cadence };
  }, [goal, maturity, pace]);

  return (
    <div className="navigator">
      <form className="navigator-form" onSubmit={(event) => event.preventDefault()}>
        <fieldset>
          <legend>1. Primary business goal</legend>
          <div className="option-grid">
            {(Object.entries(goals) as [GoalKey, (typeof goals)[GoalKey]][]).map(([key, value]) => (
              <button className={goal === key ? "option active" : "option"} type="button" onClick={() => setGoal(key)} key={key}>
                {value.label}
              </button>
            ))}
          </div>
        </fieldset>
        <div className="select-row">
          <label>
            2. Current maturity
            <select value={maturity} onChange={(event) => setMaturity(event.target.value)}>
              <option value="starting">Starting from zero</option>
              <option value="fragmented">Tools are fragmented</option>
              <option value="running">Already operating</option>
            </select>
          </label>
          <label>
            3. Preferred pace
            <select value={pace} onChange={(event) => setPace(event.target.value)}>
              <option value="fast">Fast-track</option>
              <option value="guided">Guided</option>
              <option value="advisory">Advisory only</option>
            </select>
          </label>
        </div>
      </form>

      <section className="navigator-result" aria-live="polite">
        <div className="result-topline"><span>Recommended operating sequence</span><b>LIVE PLAN</b></div>
        <h3>{plan.label}</h3>
        <p className="result-lead">{plan.outcome}</p>
        <div className="route">
          {plan.steps.map((step, index) => (
            <div className="route-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
        <div className="result-notes">
          <p><span>Lead specialist</span>{plan.specialist}</p>
          <p><span>Starting rule</span>{plan.opening}</p>
          <p><span>Delivery cadence</span>{plan.cadence}</p>
        </div>
      </section>
    </div>
  );
}
