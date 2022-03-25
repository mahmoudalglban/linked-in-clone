import React from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebar.css"
import { useSelector } from "react-redux";
import {  selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser)


    const recentItem = (topic) =>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://fitchandneary.com/wp-content/uploads/2019/05/COMPASSION.jpg" alt="" />
        <Avatar src={user.photoUrl} className="sidebar__avatar" >{user?.displayName[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>who viewed you</p>
          <p className="sidebar__stateNumber">2.356</p>
        </div>
        <div className="sidebar__stat">
          <p>views on post</p>
          <p className="sidebar__stateNumber">3.451</p>
        </div>
      </div>
      <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem("react js")}
          {recentItem("programming")}
          {recentItem("softwareengineering")}
          {recentItem("design")}
          {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
