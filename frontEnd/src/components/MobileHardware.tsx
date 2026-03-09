const hardwareTracks = [
  {
    title: "IoT Devices",
    points: ["ESP32 firmware integration", "MQTT telemetry and command channels", "Relay and sensor-based control systems"],
  },
  {
    title: "Embedded Hardware",
    points: ["Battery management and safety design", "Power distribution and instrumentation", "SolidWorks enclosures for integrated electronics"],
  },
  {
    title: "System Architecture",
    points: ["Device-to-cloud data flow", "Time-series telemetry pipelines", "Mobile interfaces for real-time monitoring"],
  },
];

export function MobileHardware() {
  return (
    <section id="hardware" className="section mobile-hardware">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Engineering Projects</p>
          <h2 className="mobile-hardware-heading">Embedded systems and hardware focus</h2>
        </div>
        <div className="mobile-hardware-diagram" aria-label="Data flow">
          <div className="mobile-diagram-node">Sensors + Actuators</div>
          <span className="mobile-diagram-arrow" aria-hidden>→</span>
          <div className="mobile-diagram-node">ESP32 + Firmware</div>
          <span className="mobile-diagram-arrow" aria-hidden>→</span>
          <div className="mobile-diagram-node">Cloud + APIs</div>
          <span className="mobile-diagram-arrow" aria-hidden>→</span>
          <div className="mobile-diagram-node">Mobile / Web UX</div>
        </div>
        <div className="mobile-hardware-tracks">
          {hardwareTracks.map((track) => (
            <article className="mobile-hardware-track card" key={track.title}>
              <h3 className="mobile-hardware-track-title">{track.title}</h3>
              <ul className="mobile-hardware-track-list">
                {track.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
