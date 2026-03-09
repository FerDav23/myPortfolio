import { aboutNarrative } from "../data/portfolioData";

const pillars = [
  { title: "Hardware", detail: "Sensors, relays, power systems, instrumentation" },
  { title: "Firmware", detail: "ESP32 control logic, MQTT communication, edge behavior" },
  { title: "Cloud", detail: "AWS infrastructure, APIs, and data pipelines" },
  { title: "Product", detail: "React and React Native user experiences" },
];

export function MobileAbout() {
  return (
    <section id="about" className="section mobile-about">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">About Me</p>
          <h2 className="mobile-about-heading">Engineering across hardware and software</h2>
        </div>
        <div className="mobile-about-body">
          <div className="mobile-about-narrative">
            {aboutNarrative.map((paragraph) => (
              <p key={paragraph} className="muted">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mobile-about-pillars">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="mobile-about-pillar">
                <span className="pill-icon" aria-hidden>
                  ●
                </span>
                <div>
                  <h3>{pillar.title}</h3>
                  <p className="muted">{pillar.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
