import React, { useState, useEffect } from "react";

const Gallery = ({ eventId }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImagePaths = async () => {
      try {
        const imagePaths = await importAll(require.context(
          `/resources/events/Gallery/${eventId}`,
          false,
          /\.(png|jpe?g|svg)$/));
        setImages(imagePaths);
      } catch (error) {
        console.error("Error loading images:", error);
        setImages([]);
      }
    };

    loadImagePaths();
  }, [eventId]);

  const importAll = (r) => {
    return r.keys().map(r);
  };

  return (
    <div className="gallery">
      <h1>Event Gallery</h1>
      <div className="gallery-images">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`event-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
