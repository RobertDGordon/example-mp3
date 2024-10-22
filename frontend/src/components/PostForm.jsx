import { useState } from "react";

function PostForm({setPosts}) {
  // const {setPosts} = props
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault()

    fetch('http://localhost:8080/api/posts/create', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        description: description,
        image: image,
        userId: 1
      })
    })
      .then((res)=> res.json())
      .then((json)=> {
        // console.log(json)
        // on successful response
        // make a fetch call to get the new posts
        fetch('http://localhost:8080/api/posts')
          .then((res)=> res.json())
          .then((json) => {
            console.log('App.jsx useEffect:', json.data)
            setPosts(json.data)
          })
      })
  }

  return (
    <div>
      <h2>Create Post:</h2>
      <form onSubmit={handleSubmit}>
        {/* {Post Title} */}
        <div>
          <label>
            Title:
            <input
              type="text"
              value={title}
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        {/* {Post Description} */}
        <div>
          <label>
            Description:
            <input
              type="text"
              value={description}
              name="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        {/* {Post image} */}
        <div>
          <label>
            Image:
            <input
              type="text"
              value={image}
              name="image"
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
        </div>
        <button>Send It</button>
      </form>
    </div>
  );
}

export default PostForm;
