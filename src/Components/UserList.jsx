import React, {useState} from "react";
import UserForm from "./Form/UserForm";
import List from "./List/List";
import "./style.css";

const UserList = (props) => {
  const [users, setUsers] = useState([]);

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  }
  console.log('users in UserList',users);

  return (
    <div className="main-container">
      <div className="components-wrapper">
        <UserForm onAddUser={handleAddUser}/>
        <div>
          <List itemData={users} />
        </div>
      </div>
    </div>
  );
};

export default UserList;
