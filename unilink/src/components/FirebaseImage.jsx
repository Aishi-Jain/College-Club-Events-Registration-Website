import React, { useState, useEffect } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../config/firebase";

const FirebaseImage = ({ imagePath, alt }) => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const fileRef = ref(storage, imagePath);
        const downloadURL = await getDownloadURL(fileRef);
        setImageURL(downloadURL);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchImage();
  }, [imagePath]);

  if ((!imageURL) && error) {
    return (
      <div>
        Error loading image {imagePath} {alt} {imageURL}: {error}
      </div>
    );
  }

  return imageURL ? <img id={imagePath} src={imageURL} alt={alt} /> : <div>Loading...</div>;
};
export default FirebaseImage;