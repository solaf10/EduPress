import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="text">
          <h1>Build Skills with Online Course</h1>
          <p>
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized that cannot trouble.
          </p>
          <button>Posts comment</button>
        </div>
        <div className="image">
          <img
            className="bg"
            src="/assets/images/hero-online-school.png"
            alt="online-school"
          />
          {/* <img
            src="/assets/images/undraw_dev-productivity_5wps.svg"
            alt="online-school"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
