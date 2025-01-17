import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './landingpage';
import UsersPage from './UsersPage';
import UserPosts from './UserPosts';
import NotificationsPage from './NotificationsPage';
import CreatePost from './CreatePost';
import EditPost from './EditPost';
import './../styles/App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([{ id: 1, name: 'Author 1' }]);

  const addPost = (post) => setPosts([...posts, { id: posts.length + 1, ...post }]);
  const editPost = (id, updatedPost) =>
    setPosts(posts.map((post) => (post.id === id ? { ...post, ...updatedPost } : post)));

  return (
    <div>
        {/* Do not remove the main div */}
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage posts={posts} onReact={() => {}} />} />
        <Route path="/users" element={<UsersPage users={users} />} />
        <Route
          path="/users/:userId"
          element={<UserPosts user={users[0]} posts={posts} />}
        />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/create" element={<CreatePost users={users} onCreatePost={addPost} />} />
        <Route
          path="/posts/:postId"
          element={<EditPost post={posts[0]} onEditPost={editPost} />}
        />
      </Routes>
    </Router>
    </div>
  )
}

export default App
