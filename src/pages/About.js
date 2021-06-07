import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          It is Joicy Joy's first pizza app. sdfsdfsdfdf sdfsdfsdfsdfsdhrthrh
          ghrhrthrthf egergergergger gefgegegerg ergergerg egtyj yujy uj yj yj
          yu j y j j thrthrthrthrthrthrth rthrhergerg ergerergergerg ergergerger
          egrgerg dfgdfgdfgdf dfdgdfgdfgd sdfgdfgsdf sfbdfbdfb fgjjkhjmghn
          dfvdfvdvdfvdvdfvefvdfvdvdfvdfvdfdfdfvdfvdfv effdffgdgfg fbfgghfghgn
          grtrtgrtyrn gghrg ghngngbnghn hghrhr tghrghrgh thrhrthrt
        </p>
      </div>
    </div>
  );
}

export default About;
