import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { login } from "./features/userSlice";

function Login() {
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in
        dispatch(
          login({
            email: auth.currentUser.email,
            uid: auth.currentUser.uid,
            displayName: name,
            photoURL: profile,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const register = () => {
    if (!name) {
      return alert("Please Enter Full Name");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: profile,
          //  هابعت الحجات الي انا اخدتها دي للمتجر بتاعي الي عامله
        })
          .then(() => {
            dispatch(
              login({
                email: auth.currentUser.email,
                uid: auth.currentUser.uid,
                displayName: name,
                photoURL: profile,
              })
            );
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="login">
      {/* <img src='https://th.bing.com/th/id/R.113edd03f10d21134113b474599d38a7?rik=PBCQAWA1gePBkA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f07%2fLinkedin-Free-PNG-Image.png&ehk=tAyYOyIKWYfoYIBBl2phACgoIgiu1ABxtDec0o%2f1nUQ%3d&risl=&pid=ImgRaw&r=0'
            alt='' /> */}

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name (required if registering)"
          type="text"
        />
        <input
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          placeholder="profile pic Url (optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button onClick={loginToApp} type="submit">
          Sign In
        </button>
      </form>
      <p>
        Not a member?
        <span onClick={register} className="login__register">
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
