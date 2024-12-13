import { useEffect, useState, useContext } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import DataContext from "./context/DataContext";
import { format } from 'date-fns';
import api from './api/posts'

const EditPost = () => {
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const { posts, setPosts } = useContext(DataContext);
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);
    const navigate = useNavigate();

    // Initialize the form fields with the post data
    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditTitle, setEditBody]);

    const handleEdit = async (id) => {
        const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
        const updatedPost = { id, title: editTitle, dateTime, body: editBody };    
        try {    
          const res = await api.put(`/posts/${id}`, updatedPost);     
          setPosts(posts.map(post => post.id === id ? {...res.data} : post));
          setEditTitle('');
          setEditBody('');
          navigate('/'); 
        } catch (err) {
          console.log(`Error: ${err.message}`);
        }
      };

    return (
        <main className="NewPost">
        {editTitle &&
            <>
                <h2>Edit Post</h2>
                <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="postTitle">Title:</label>
                    <input
                        id="postTitle"
                        type="text"
                        required
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <label htmlFor="postBody">Post:</label>
                    <textarea
                        id="postBody"
                        required
                        value={editBody}
                        onChange={(e) => setEditBody(e.target.value)}
                    />
                    <button type="submit" onClick={() => handleEdit(post.id)}>Submit</button>
                </form>
            </>
        }
        {!editTitle &&
            <>
                <h2>Post Not Found</h2>
                <p>Well, that's disappointing.</p>
                <p>
                    <Link to='/'>Visit Our Homepage</Link>
                </p>
            </>
        }
    </main>
    )
  }
  
  export default EditPost
  