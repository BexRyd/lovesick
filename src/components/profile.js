import React, { useState } from "react";
import girl from "../img/girl.jpg";
import hike1 from "../img/hike1.jpg";
import hike2 from "../img/hike2.jpg";
import hike3 from "../img/hike3.jpg";
import hike4 from "../img/hike4.jpg";
function Profile() {
  const [formData, setformData] = useState({
    Age: "30",
    City: "Stockholm",
    Hobbies: "Hiking",
    Occupation: "Teacher",
    Relationship: "Single",
  });
  return (
    <div className="profileContainer">
      <div className="textContainer">
        <h1>Sofie Englund</h1>
        <div className="containerInput">
          <div>
            <h3>Age: {formData.Age}</h3> <h3>City: {formData.City}</h3>
            <h3>Hobbies: {formData.Hobbies}</h3>
            <h3>Occupation: {formData.Occupation}</h3>
            <h3>Relationship status: {formData.Relationship}</h3>
          </div>

          <div className="input">
            <input
              className="inputClass"
              onChange={(e) =>
                setformData({ ...formData, Age: e.target.value })
              }
            ></input>

            <input
              className="inputClass"
              onChange={(e) =>
                setformData({ ...formData, City: e.target.value })
              }
            ></input>
            <input
              className="inputClass"
              onChange={(e) =>
                setformData({ ...formData, Hobbies: e.target.value })
              }
            ></input>
            <input
              className="inputClass"
              onChange={(e) =>
                setformData({ ...formData, Occupation: e.target.value })
              }
            ></input>

            <input
              className="inputClass"
              onChange={(e) =>
                setformData({ ...formData, Relationship: e.target.value })
              }
            ></input>
          </div>
        </div>

        <img className="girl" src={girl} alt="girl"></img>
        <div className="hikeContainer">
          <img className="hike" src={hike1} alt="girl"></img>
          <img className="hike" src={hike2} alt="girl"></img>
          <img className="hike" src={hike3} alt="girl"></img>
          <img className="hike" src={hike4} alt="girl"></img>
        </div>

        <h2>What Im looking for: </h2>
      </div>
      <textarea>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </textarea>
      <br />
      <button className="saveBtn">Save</button>
    </div>
  );
}

export default Profile;
