import logo from "./logo.svg";
import "./App.css";
import Post from "./Post";
import socialite from "./socialite.png";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src={socialite} alt="socialite"></img>
      </div>
      <h1>Hello World</h1>
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
