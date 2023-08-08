import React from "react";
import "./First.css";

const inputBoxes = [
  { sl: 1, id: "name", ph: "Your Name" },
  { sl: 2, id: "mail", ph: "Your Email" },
  { sl: 3, id: "sub", ph: "Subject" },
  { sl: 4, id: "mess", ph: "Message" },
];

const First = () => {
  return (
    <div className="container mt-5">
      <div>
        <div className="firstcontent">
          {inputBoxes.map((each) => (
            <div key={each.sl}>
              <input
                type="text"
                className="form-control"
                placeholder={each.ph}
              />
              <br />
            </div>
          ))}

          {/* bootstrap form-control for creating typing box */}
          <button type="button" className="m-2 msg">
            Send Message
          </button>
          {/* button tag for provide clicking button */}
        </div>
      </div>
    </div>
  );
};

export default First;
