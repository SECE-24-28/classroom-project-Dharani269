import React, { useState, useEffect } from 'react';

const FakeImageAPI = () => {
  const [Image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://picsum.photos/300/200')
      .then(response => {
        setImage(response.url);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching image:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Fake Image API</h2>
      {loading ? (
        <p>Loading image...</p>
      ) : (
        <img src="https://picsum.photos/300/200" alt="Random Image" style={{width: '300px', height: '200px'}} />
      )}
    </div>
  );
};

export default FakeImageAPI;