import React from "react";
import userImg from "../../images/userImg.png";

const UserCard = () => {
  return (
    <div className="user-card">
      <div className="user-card-img">
        <img src={userImg} alt="user" />
      </div>
    </div>
  );
};

export default UserCard;
