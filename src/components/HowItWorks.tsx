import "./HowItWorks.css";

function HowItWorks() {
  const steps = [
    "Analyze Rhythm",
    "Assess Stability",
    "Choose Treatment",
    "Review Feedback",
  ];

  return (
    <section className="how-section glass-card">
      <div className="home-section-heading">
        <span className="badge">How It Works</span>
        <h2>Train like a real clinical decision-maker.</h2>
      </div>

      <div className="steps">
        {steps.map((step, index) => (
          <div className="step-card" key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;