import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
// material ui
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch } from "react-redux";
import {auth} from "./firebase"
import { logout } from "./features/userSlice";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import {  selectUser } from "./features/userSlice";

function Header() {
  const user = useSelector(selectUser)

  const dispatch = useDispatch()

    const logoutToApp = ()=>{
      dispatch(logout())
      signOut(auth).then(() => {
        // Sign-out successful.
        alert("Sign-out successful.")
      }).catch((error) => {
        // An error happened.
        alert("An error happened.")

      });

    }

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
         <HeaderOption Icon={HomeIcon} title="Home"/> 
         <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/> 
         <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/> 
         <HeaderOption Icon={ChatIcon} title="Messaging"/> 
         <HeaderOption Icon={NotificationsIcon} title="Notification"/> 
         <HeaderOption avatar={true} title="Me"/> 
         <HeaderOption onClick={logoutToApp} Icon={ExitToAppIcon} title="Logout"/> 
      </div>
    </div>
  );
}

export default Header;
