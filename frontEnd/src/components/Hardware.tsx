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
  {
    title: "Networking & Simulation",
    points: ["ns-3 network simulation", "Distributed and P2P systems", "TCP/IP, MQTT, REST"],
  },
];

export function Hardware() {
  return (
    <section id="hardware" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Engineering Projects</p>
          <h2>Embedded systems and hardware focus</h2>
        </div>
        <div className="hardware-diagram">
          <div className="diagram-node">Sensors + Actuators</div>
          <div className="diagram-arrow">→</div>
          <div className="diagram-node">ESP32 + Firmware</div>
          <div className="diagram-arrow">→</div>
          <div className="diagram-node">Cloud + APIs</div>
          <div className="diagram-arrow">→</div>
          <div className="diagram-node">Mobile / Web UX</div>
        </div>
        <div className="skills-grid">
          {hardwareTracks.map((track) => (
            <article className="card" key={track.title}>
              <h3>{track.title}</h3>
              <ul>
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
