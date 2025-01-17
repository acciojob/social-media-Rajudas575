import React, { useState } from 'react';

const CreatePost = ({ users, onCreatePost }) => {
  const [authorId, setAuthorId] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    onCreatePost({ authorId, content });
  };

  return (
    <div>
      <h1>Create Post</h1>
      <select id="postAuthor" onChange={(e) => setAuthorId(e.target.value)}>
        <option value="">Select Author</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <textarea
        id="postContent"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CreatePost;
