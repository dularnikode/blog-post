import React from 'react';
import './App.css';

function App() {
  return (
    <>
    <h1>Hello this is Blog-post App</h1>
    <div>
      <h2>Layout</h2>
      <div>
          <h2>Navigation</h2>
          <p>Logo</p>
          <p>Posts</p>
          <p>Logout || Login</p>
      </div>
      <div>
        <h2>Posts</h2>
        <div>
          <h3>Post Cards</h3>
          <p>Title</p>
          <p>Content</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>

      <div>
        <h2>create post</h2>
        <p>Modal</p>
        <p>Title</p>
        <p>Content</p>
        <button>Save</button>
        <button>Cancel</button>
      </div>

      <div>
        <h2>Login</h2>
        <p>Input username</p>
        <p>Input password</p>
        <button>Login</button>
      </div>
    </div>
    </>

  );
}

export default App;
