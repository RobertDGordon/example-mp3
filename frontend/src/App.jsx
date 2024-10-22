import { useState } from 'react'
import "./App.css";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([])
  // console.log('App.jsx', data)

  return (
    <>
      <PostForm setPosts={setPosts}/>
      <PostList posts={posts} setPosts={setPosts}/>
    </>
  );
}

export default App;
