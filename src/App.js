import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { auth } from "./firebase";
import Feed from "./Feed";
import { useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch } from "react-redux";
import Login from "./Login";
// دا بيسمعلي لو سجلت الدخول ولا لا 
import {  onAuthStateChanged } from "firebase/auth";
import Widgets from "./Widgets";


function App() {
  const user = useSelector(selectUser);
   const dispatch = useDispatch()
  // دي هاستخدمها عشان لو سجل الدخول يفضل مسجل علي طول عندي 
  useEffect(() =>{
//  دا عشان اسمع هوا مسجل الدخول ولا لا 
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          email:user.email,
          uid:user.uid,
          displayName:user.displayName,
          photoUrl:user.photoURL,
        }))
      } else {
        dispatch(logout)
      }
    });


  },[])

  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* app body */}

      {!user ? (
        <Login /> 
        
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
