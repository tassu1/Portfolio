import data from "./data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--header">
        <h2 className="section--heading">Recent Projects</h2>
      </div>
      <div className="portfolio--grid">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--card">
            <div className="card--image">
              <img src={item.src} alt={item.title} />
            </div>
            <div className="card--content">
              <h3>{item.title}</h3>
              <p className="card--description">{item.description}</p>
              <div className="card--links">
                <a href={item.github} target="_blank" rel="noopener noreferrer" className="card--link github">
                  GitHub
                </a>
                <a href={item.live} target="_blank" rel="noopener noreferrer" className="card--link live">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}