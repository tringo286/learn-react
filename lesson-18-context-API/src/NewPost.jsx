import { useState, useContext } from "react";
import DataContext from "./context/DataContext";
import { useNavigate } from "react-router-dom";
import api from './api/posts'
import { format } from 'date-fns';

const NewPost = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const { posts, setPosts } = useContext(DataContext);
  const navigate = useNavigate();

  const handleSubmit = async  (e) => {
      e.preventDefault();
      const id = posts.length ? Math.max(...posts.map(post => post.id)) + 1 : 1;
      const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
      const newPost = { id, title: postTitle, datetime: dateTime, body: postBody };
      try {
        const res = await api.post('/posts' ,newPost);
        const newPosts = [...posts, res.data];
        setPosts(newPosts);
        setPostTitle('');
        setPostBody('');
        navigate('/');
        } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };  
  
  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input 
          id='title'
          type="text" 
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post:</label>
        <textarea 
          id="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />          
       <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default NewPost
