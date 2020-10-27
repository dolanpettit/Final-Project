import React, { useState } from "react";
import "./App.css";
import Post from "./Post";
import socialite from "./socialite.png";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "dolanpettit",
      caption: "Wow it works!",
      imageUrl:
        "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
    },
    {
      username: "dolanpettit",
      caption: "Wow it works!",
      imageUrl:
        "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
    },
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src={socialite} alt="socialite"></img>
      </div>
      <h1>Hello World</h1>
      <Post
        username="dolanpettit"
        caption="Wow it works!"
        imageUrl="https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
      />
      <Post
        username="jacobTorres"
        caption="Wow it works!"
        imageUrl="https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
      />
      <Post
        username="josephTorres"
        caption="Wow it works!"
        imageUrl="https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
      />
    </div>
  );
}

export default App;
