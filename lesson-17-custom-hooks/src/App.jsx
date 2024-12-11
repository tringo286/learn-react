import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from 'date-fns';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import EditPost from "./EditPost";
import About from './About';
import Missing from './Missing';
import api from './api/posts';
import useWindowSize from "./hooks/useWindowSize";
import useAxiosFetch from "./hooks/useAxiosFetch";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const navigate = useNavigate();
  const { width } = useWindowSize();

  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

  useEffect(() => {
    setPosts(data);
  },[data]);

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
      <Header title={'React JS Blog'} width={width} />
      <Nav search={search} setSearch={setSearch}/>
      <Routes>
        <Route index element={
          <Home 
            posts={searchResults} 
            fetchError={fetchError} 
            isLoading={isLoading} 
          />} 
        />
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
