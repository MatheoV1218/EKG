import "./FloatingParticles.css";

function FloatingParticles() {
  return (
    <div className="floating-particles" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}

export default FloatingParticles;