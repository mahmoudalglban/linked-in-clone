import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post";
import { db } from "./firebase";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import InputOption from "./InputOption";
import FlipMove from "react-flip-move";
import {
  collection,
  onSnapshot,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const user = useSelector(selectUser);

  useEffect(() => {
    const calRef = collection(db, "posts");
    const q = query(calRef, orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    if (input != "") {
      const calRef = collection(db, "posts");
      addDoc(calRef, {
        name:user?.displayName,
        description:user.email,
        message: input,
        photoUrl:user.photoUrl || "",
        timestamp: serverTimestamp(),
      });
    }
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              send
            </button>
          </form>
        </div>
        <div className="feed__inputOption">
          <InputOption Icon={ImageIcon} title="Photo" color="#7085f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div>

      {/* post */}
      <FlipMove>
        {posts.map(
          ({
            id,
            data: { name, description, message, photoUrl, timestamp },
          }) => (
            <Post
              key={id}
              name={name}
              description={description}
              photoUrl={photoUrl}
              timestamp={timestamp}
              message={message}
            />
          )
        )}
      </FlipMove>
    </div>
  );
}

export default Feed;
