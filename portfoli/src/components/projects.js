import React from "react";

function addCard({ name, img, link1, link2 }) {
  return (
    <div className="col-1">
      <div className="project__box">
        <div className="proj__images">
          <img src={img} alt="" className="proj__image" />
        </div>

        <div className="texts">
          <h1 className="t-1" style={{ color: "white", fontSize: "20px" }}>
            {name}
          </h1>
          <div className="button">
            <button className="btn">
              <a href={link1} style={{ color: "black" }}>
                GITHUB
              </a>
            </button>
            <button className="btn">
              <a href={link2} style={{ color: "black" }}>
                WEBSITE
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function projects() {
  return (
    <div className="projects" id="Projetcs">
      <div className="project_container">
        <div className="p-t">
          <h1 className="pt2" style={{ fontSize: "58px", marginTop: "-50px" }}>
            My Projects
          </h1>
        </div>
        <div className="containers">
          <div className="row pd">
            {addCard({
              name: "User Details",
              img: "images/mern.jpg",
              link1: "https://github.com/developer-prashant-999/Mern-Stack",
              link2: "https://mern-prashant.herokuapp.com/",
            })}
            {addCard({
              name: "TODO",
              img: "images/todo_pic.jpg",
              link1: "https://github.com/developer-prashant-999/todo",
              link2: "https://developer-prashant-999.github.io/todo/#/todolist",
            })}
            {addCard({
              name: "Vacent",
              img: "images/new.jpg",
            })}

            {/* <div className="col-1">
              <div className="project__box">
                <div className="proj__images">
                  <img src="/images/mern.jpg" alt="" className="proj__image" />
                </div>

                <div className="texts">
                  <h1 className="t-1">MERN SIGN UP</h1>
                  <div className="button">
                    <button className="btn">Details</button>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className="col-1">
              <div className="project__box">
                <div className="proj__images">
                  <img
                    src="/images/todo_pic.jpg"
                    alt=""
                    className="proj__image"
                  />
                </div>

                <div className="texts">
                  <h1 className="t-1">TODO LIST</h1>
        
                  <div className="button">
                    <button className="btn">Details</button>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-1">
              <div className="project__box">
                <div className="proj__images">
                  <img src="/images/new.jpg" alt="" className="proj__image" />
                </div>

                <div className="texts">
                  <h1 className="t-1">vacent</h1>
                  <h5 className="t-2">Comming soon</h5>
                  <div className="button">
                    <button className="btn">Details</button>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default projects;
