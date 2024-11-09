import { useState } from 'react'
import "./App.css";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import CalendarPage from './components/CalendarPage';

function App() {
  const [posts, setPosts] = useState([])
  // console.log('App.jsx', data)

  return (
    <div className="app">
      {/* <PostForm setPosts={setPosts}/>
      <PostList posts={posts} setPosts={setPosts}/> */}
      <CalendarPage />
    </div>
  );
}

export default App;
