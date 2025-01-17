import React, { useState } from 'react';

const EditPost = ({ post, onEditPost }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleEdit = () => {
    onEditPost(post.id, { title, content });
  };

  return (
    <div>
      <h1>Edit Post</h1>
      <input
        id="postTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        id="postContent"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="button" onClick={handleEdit}>
        Save Changes
      </button>
    </div>
  );
};

export default EditPost;
