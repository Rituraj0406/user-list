import React from "react";
import "./ListStyle.css";
import ListItem from "./ListItem";

const List = (props) => {
  // console.log(props.itemData);
  const datas = props.itemData;
  return (
    <div className="main-list-wrpper">
      User-List
      {datas.map((data) => (
        <ListItem
          key={data.name}
          name={data.name}
          age={data.age}
          email={data.email}
          phone={data.phone}
          occupation={data.occupation}
          city={data.city}
        />
      ))}
      {/* <ListItem /> */}
    </div>
  );
};

export default List;
