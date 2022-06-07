import React from "react";
function About() {
  return (
    <div className="About" id="About">
      <div className="container">
        <div className="row">
          <div className="column-1">
            <img src="/images/1.png" alt="" className="abt__image" />
          </div>

          <div className="column_2">
            <h1
              className="pt2"
              style={{ fontSize: "58px", marginTop: "-50px" }}
            >
              About Me
            </h1>
            <p className="p1">
              Hello, I am individual MERN stack developer. I have completed my
              high school and currently studying compute engineering in one of
              the reputed college of Nepal
              <h2 style={{ color: "yellow" }}>Khwopa college of Engineering</h2>
              <br />
              <br />
              I am not a perfectionist, but i take my job seriously and peform
              my best. I have been learning and working on MERN stack for 6
              months. And before that i have been working on mobile app
              develpment using Flutter as well.
              <br />
              <br />I have worked on some individual projects as well. You can
              view them in project section.
            </p>

            <button className="b1">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
