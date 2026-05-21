import "./FloatingParticles.css";
function FloatingParticles() {
  return (
    <div className="sim-particles" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, index) => (
        <span key={index} style={{ "--i": index } as React.CSSProperties} />
      ))}
    </div>
  );
}
export default FloatingParticles;
