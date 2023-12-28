import React, { useContext } from 'react'
import { AppContext } from '../App'

function FileForm() {
    const {latestPost, setLatestPost} = useContext(AppContext)
  
    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData();

        data.append("post[title]", event.target.title.value);
        data.append("post[content]", event.target.content.value);
        data.append("post[image]", event.target.image.files[0]);
        submitToAPI(data)
    }

    function submitToAPI(data) {
        fetch("http://localhost:3000/api/v1/posts", {
            method: "POST",
            body: data,
        })
        .then((response) => response.json())
        .then((data) => {
            setLatestPost(data.image_url);
        })
        .catch((error) => console.error(error));
    }
  
  
    return (
    <div>
        <h1>File Form</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Title</label>
        <input type="text" name='title' id='title' />
        <br />
        <label htmlFor="content">Content</label>
        <input type="text" name='content' id='content' />
        <br />
        <label htmlFor="image">Image</label>
        <input type="file" name='image' id='image' />
        <br />
        <button type='submit'>Post</button>
        </form>
    </div>
  )
}

export default FileForm