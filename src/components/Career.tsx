import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front End Developer</h4>
                <h5>LevelUp</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Helped shape LevelUp’s frontend by building a scalable React-based UI
              system, focusing on performance optimization, accessibility, and
              reusable component architecture. Collaborated closely with design and
              backend teams to deliver a polished, responsive product that scales
              across devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;