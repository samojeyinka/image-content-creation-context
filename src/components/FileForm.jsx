import React, { useContext } from 'react'
import { AppContext } from '../App'
import axios from 'axios';

function FileForm() {
    const { setLatestPost } = useContext(AppContext);
  
    async function handleSubmit(event) {
      event.preventDefault();
      const data = new FormData();
  
      data.append("project[name]", event.target.title.value);
      data.append("project[details]", event.target.details.value);
      data.append("project[description]", event.target.content.value);
      data.append("project[image]", event.target.image.files[0]);
  
      try {
        const res = await axios.post("http://localhost:3000/api/v1/projects", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setLatestPost(res.data.image_url);
      } catch (error) {
        console.error(error);
      }
    }
  
    return (
      <div>
        <h1>File Form</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
          <br />
          <label htmlFor="content">Description</label>
          <input type="text" name="content" id="content" />
          <br />
          <label htmlFor="details">Details</label>
          <input type="text" name="details" id="details" />
          <br />
          <label htmlFor="image">Image</label>
          <input type="file" name="image" id="image" />
          <br />
          <button type="submit">Post</button>
        </form>
      </div>
    );
  }
  

export default FileForm