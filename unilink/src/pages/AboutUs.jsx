import React from 'react';

const Home = () => {
  document.documentElement.style.removeProperty('--theme-color');
  return (
    <div>
      <h2>About Us</h2>
    </div>
  );
};

export default Home;
