import React from 'react';

const UserPosts = ({ user, posts }) => {
  const userPosts = posts.filter((post) => post.authorId === user.id);
  return (
    <div>
      <h1>Posts by {user.name}</h1>
      <div className="posts-list">
        {userPosts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPosts;
