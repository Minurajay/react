import React from 'react';
import 'bulma/css/bulma.css';
import '../App.css';
import pens from '../photo/pens.png';

function Contact() {
  return (
    <div>
      <h1 className="title is-2 pt-6 pl-6 custom-font-3 brown-text">Contact</h1>
      <div className="main">
        <div className="sub" id="pr" style={{width: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
          <div className="photo m-6">
            <img src={pens} alt="" height="250px" width="50%"/>
          </div>
        </div>

        <div className="sub" id="pr" style={{width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
          <div className="description ml-6 custom-font blue-text">
            Address <br/>
            87/2A <br/>
            Navam Mawatha <br className="mb-3"/>
            <br className="mt-3"/>Colombo 5 <br/>
            mkminura@gmail.com <br/>
            twitter.com/minurase
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
