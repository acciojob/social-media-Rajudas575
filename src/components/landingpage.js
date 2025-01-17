import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = ({ posts, onReact }) => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/notifications">Notifications</Link>
        <Link to="/create">Create Post</Link>
      </nav>
      <div className="posts-list">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => onReact(post.id)}>React</button>
            <Link to={`/posts/${post.id}`}>View Post</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
