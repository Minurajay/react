import React from "react";
import 'bulma/css/bulma.css';
import '../App.css';
import me from '../photo/Me.jpg';

function Main() {
  return (
    <>
    <div className="main">
      <div className="sub" id="intro" style={{ width: "45%", paddingLeft: "15%", paddingBottom: "15%" }}>
        <h1 className="title is-2 pt-6 pl-6 custom-font blue-text">
          Hello, I'm Minura </h1>
          <br />
          <span className="custom-font-2 blue-text">Business Analyst</span>
          <br className="mb-0" />
          <span className="custom-font blue-text">Based in Colombo</span>
          <div className="buttons">
            <button className="button is-warning">Resume</button>
          </div>
        </div>

        <div className="sub" style={{height: "500px",width: "55%",backgroundImage:`url(${me})` ,backgroundRepeat: "no-repeat",backgroundPosition: "center",backgroundSize: "cover"}}></div>
      </div>
      <div>
        <h1 className="title is-1 pt-6 pl-6 custom-font-3 brown-text">Resume Objective</h1>
        <p className="p-6 custom-font blue-text">
          Enthusiastic and motivated undergraduate student at University of
          Colombo School of Computing seeking an internship for a Business
          Analyst position. Skillful in the use of C, C++ and python. Have
          sufficient knowledge of handling databases such as Microsoft SQL
          Server, MySQL database, Oracle DB, as well as NoSQL databases.
        </p>
      </div>
    </>
  );
}

export default Main;
