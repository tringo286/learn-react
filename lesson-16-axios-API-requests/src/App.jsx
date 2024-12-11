import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from 'date-fns';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import api from './api/posts';
import EditPost from "./EditPost";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.get('/posts');
        setPosts(res.data);
      } catch (err) {
        if (err.response) {
          // HTTP error
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else { // Other error
          console.log(`Error: ${err.message}`);
        }
      }
    }
    fetchPosts();
  }, [])

  useEffect(() => {
    const filteredResults = posts.filter(post => 
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()))
      setSearchResults(filteredResults.reverse())
  }, [posts, search])

  const handleSubmit = async  (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length -1].id + 1 : 1;
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
  }

  const handleEdit = async (id) => {
    const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, title: editTitle, datetime: dateTime, body: editBody };    
    try {    
      const res = await api.put(`/posts/${id}`, updatedPost);     
      setPosts(posts.map(post => post.id === id ? {...res.data} : post));
      setPostTitle('');
      setPostBody('');
      navigate('/'); 
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };  
 
  const handleDelete = async (id) => {
    try {    
      await api.delete(`/posts/${id}`);     
      const newPosts = posts.filter(post => post.id !== id)      
      setPosts(newPosts);
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <div className="App">     
      <Header title={'React JS Blog'} />
      <Nav search={search} setSearch={setSearch}/>
      <Routes>
        <Route index element={<Home posts={searchResults} />} />
        <Route path="/post" element={
          <NewPost 
            postTitle={postTitle} 
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
            handleSubmit={handleSubmit}
          />
        }/>        
        <Route path="/edit/:id"
          element={
            <EditPost
            posts={posts}
            handleEdit={handleEdit}
            editTitle={editTitle}
            setEditTitle={setEditTitle}
            editBody={editBody}
            setEditBody={setEditBody}
          />
        }/>  
        <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
        <Route path="/about" element={<About />} /> 
        <Route path="*" element={<Missing />} />
      </Routes>    
      <Footer />
    </div>
  )
}

export default App;
