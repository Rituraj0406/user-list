import React from "react";
import "./ListItemStyle.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import WorkIcon from "@mui/icons-material/Work";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PersonIcon from "@mui/icons-material/Person";

const ListItem = (props) => {
  // console.log("data coming from List", props);
  return (
    <div className="list-item-wrapper">
      <div>
        <div className="name-container">
          <p className="user-section">
            <span>
              <AccountCircleIcon />
            </span>
            {props.name}
          </p>
        </div>
        <div className="name-container">
          <p className="inner__sec">
            <span className="image">
              <PersonIcon />
            </span>
            {props.age}
          </p>
          |
          <p className="inner__sec">
            <span className="image">
              <EmailIcon />
            </span>
            {props.email}
          </p>
          |
          <p className="inner__sec">
            <span className="imageCall">
              <CallIcon />
            </span>
            {props.phone}
          </p>
          |
          <p className="inner__sec">
            <span className="imageCall">
              <WorkIcon />
            </span>
            {props.occupation}
          </p>
        </div>
      </div>
      <div className="name-container__last">
        <p>
          <span className="image">
            <LocationCityIcon />
          </span>
          {props.city}
        </p>
      </div>
    </div>
  );
};

export default ListItem;
