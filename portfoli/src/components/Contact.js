import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { BsDiscord } from "react-icons/bs";
function Contact() {
  return (
    <div className="containers_1" id="Contact">
      <div className="p-t">
        <h1 className="pt2" style={{ fontSize: "58px" }}>
          Contact Me
        </h1>
      </div>
      <div className="row">
        <div className="col-1">
          <h2>You can contact me through the mail</h2>
          <br />
          <label style={{ color: "white" }}>
            <SiGmail />
          </label>
          <p>mdrrrrprashant@gmail.com</p>
        </div>
        <div className="col-1">
          <h2>Or you can directly message me</h2>
          <br />
          <label style={{ color: "white" }}>
            <a
              href="https://www.facebook.com/newar.prashant.96"
              style={{ fontSize: "30px" }}
            >
              <AiFillFacebook />
            </a>
          </label>

          <label style={{ color: "white" }}>
            <a
              href="https://www.linkedin.com/in/prashant-manandhar-478b3923a/"
              style={{ fontSize: "30px" }}
            >
              <AiFillLinkedin />
            </a>
          </label>

          <label style={{ color: "white" }}>
            <a
              href="https://www.instagram.com/praw_shant12/?hl=en"
              style={{ fontSize: "30px" }}
            >
              <AiFillInstagram />
            </a>
          </label>
          <label style={{ color: "white" }}>
            <a
              href="https://www.instagram.com/praw_shant12/?hl=en"
              style={{ fontSize: "30px" }}
            >
              <BsDiscord />
            </a>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Contact;
