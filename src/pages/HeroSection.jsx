export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1 className="hero--section--title">
            Heyy, I'm Tahseen
          </h1>
          <p className="hero--section-description">
            A passionate MERN stack developer who loves building scalable web applications and real-time solutions. Currently, I’m diving deep into AI-driven projects while continuously improving my problem-solving and DSA skills. Always learning and growing to make an impact in the tech world.
          </p>
        </div>
        <div className="hero--section--img">
          <img src="./profile.jpg" alt="Tahseen - MERN Stack Developer" />
        </div>
      </div>
      <button className="btn btn-primary" onClick={() => window.open("mailto:tassutahsee@gmail.com")}>
        Get In Touch
      </button>
    </section>
  );
}
