import React from 'react';

const Home = () => {
  document.documentElement.style.removeProperty("--theme-color");
  return (
    <div>
      <h2>Home Page</h2>
    </div>
  );
};

export default Home;