import "./AcademyStart.css";

const AcademyStart = () => {
  return (
    <div className="academy-start">
      <div className="container">
        <img
          className="backdrop"
          src="/assets/images/Mask group.png"
          alt="decoration"
        />
        <div className="intro">
          <div className="image">
            <img src="/assets/images/Graduate.svg" alt="graduate" />
          </div>
          <p className="text">Let’s Start With Academy LMS</p>
        </div>
        <div className="btns">
          <button className="student all-btn">I’m a student</button>
          <button className="instructor">Become an Instructor</button>
        </div>
      </div>
    </div>
  );
};

export default AcademyStart;
