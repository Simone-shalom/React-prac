import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [ids, setIds] = useState([]);
  const [data, setData] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(6);

  const getIds = async () => {
    try {
      const response = await axios.get(
        'https://hacker-news.firebaseio.com/v0/jobstories.json'
      );
      setIds(response.data);
    } catch (error) {
      console.error('Error fetching job IDs:', error);
    }
  };

  const getPosts = async (id) => {
    try {
      const response = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      setData((prevData) => [...prevData, response.data]);
    } catch (error) {
      console.error('Error fetching job details:', error);
    }
  };

  useEffect(() => {
    getIds();
  }, []);

  useEffect(() => {
    ids.slice(0, visiblePosts).forEach((id) => {
      getPosts(id);
    });
  }, [ids, visiblePosts]);

  const loadMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 6);
  };

  return (
    <div>
      <h1>Job Board</h1>
      {data.map((post) => (
        <div key={post.id}>
          <h3>
            {post.url ? (
              <a href={post.url} target="_blank" rel="noreferrer">
                {post.title}
              </a>
            ) : (
              post.title
            )}
          </h3>
          <p>Posted by: {post.by}</p>
          <p>Timestamp: {new Date(post.time * 1000).toLocaleString()}</p>
        </div>
      ))}
      {ids.length > visiblePosts && <button onClick={loadMore}>Load more</button>}
    </div>
  );
};

export default App;
