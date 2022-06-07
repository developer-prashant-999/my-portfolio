import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiNodejs, DiDatabase } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
function My_services() {
  return (
    <div className="myservice" id="Services">
      <div className="service__container">
        <div className="s-t">
          <h1
            className="pt2"
            style={{
              fontSize: "58px",
              marginTop: "-80px",
              marginBottom: "-80px",
            }}
          >
            MY Services
          </h1>
          <p className="st2"></p>
        </div>

        <div className="container">
          <div className="row pd">
            <div className="col1">
              {/* <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg> */}
              <label style={{ color: "white", fontSize: "100px" }}>
                <IoLogoJavascript />
              </label>
              <h1>Javascript</h1>
            </div>
            <div className="col2">
              {/* <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> */}
              <label style={{ color: "white", fontSize: "100px" }}>
                <DiNodejs />
              </label>
              <h1>Node js</h1>
            </div>
            <div className="col2">
              {/* <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg> */}
              <label style={{ color: "white", fontSize: "100px" }}>
                <AiFillGithub />
              </label>
              <h1>Github</h1>
            </div>
          </div>

          <div className="row pd">
            <div className="col1">
              {/* <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg> */}
              <label style={{ color: "white", fontSize: "100px" }}>
                <DiDatabase />
              </label>
              <h1>Database</h1>
            </div>
            <div className="col2">
              {/* <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg> */}
              <label style={{ color: "white", fontSize: "100px" }}>
                <FaReact />
              </label>
              <h1>React js</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default My_services;
