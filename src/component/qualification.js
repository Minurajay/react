import React from "react";
import 'bulma/css/bulma.css';
import '../App.css';
import unimate from '../photo/unimate.png';
import codefest from '../photo/codefest.png';

function Acedemic() {
  return (
    <div>
      <h1 className="title is-1 pt-6 pl-6 custom-font-3 brown-text">Academic Qualifications</h1>
      <ul>
        <li className="pl-6 custom-font blue-text">GCE A/Ls : Physical Science Stream
          Ananda College Colombo , 2017-2019
        </li>
        <li className="pl-6 custom-font blue-text">Bsc in Information Systems(UG)
          University of Colombo School of Computing , 2022(present)
        </li>
      </ul>

      <h1 className="title is-1 pt-6 pl-6 custom-font-3 brown-text">Extra Curricular Activities</h1>
      <ul style={{ listStyleType: "circle" }}>
        <li className="pl-6 custom-font blue-text">Member , School Basket Ball Team , 2014-2015</li>
        <li className="pl-6 custom-font blue-text">Senior Member , Interact Club of Ananda College ,2016- 2019</li>
        <li className="pl-6 custom-font blue-text">Member , Quiz Club of Ananda College , 2017-2019</li>
      </ul>

      <h1 className="title is-2 pt-6 pl-6 custom-font-3 brown-text">Participated Projects</h1>
      <div className="main">
        <div className="sub pl-6" id="pr" style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
          <div className="photo m-6">
            <img src = {unimate} alt="" height="250px" width="50%" />
          </div>
          <div className="description ml-6 custom-font blue-text">Participated in Unimate Hackathon 2021 organized by IEEE student branch of IIT</div>
        </div>

        <div className="sub pl-6" id="pr" style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
          <div className="photo m-6">
            <img src= {codefest} alt="" height="300px" width="50%" />
          </div>
          <div className="description ml-6 custom-font blue-text">Participated in CODE FEST 2021 organized by the Sri Lanka Institute of Information Technology (SLIIT).</div>
        </div>
      </div>
    </div>
  );
}

export default Acedemic;