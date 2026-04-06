export default function DigitalTwin() {
  return (
    <div className="min-h-screen" style={{ background: "#faf8f4" }}>
      <iframe
        src="/twin/index.html"
        title="Cheryl Liu Digital Twin"
        allow="microphone"
        className="w-full h-screen border-0"
      />
    </div>
  );
}
