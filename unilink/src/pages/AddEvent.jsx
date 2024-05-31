import React, { useState } from "react";
import { auth, db, storage } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const EventForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageURL: "",
    startDate: "",
    startTime: "",
    location: "",
    durationHours: "",
    durationMinutes: "",
    themeColor: "#000000",
    userId: "",
  });
  const [saveImg, setSaveImg] = useState({ image: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setSaveImg({
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = auth?.currentUser?.uid;
    if (!userId) {
      console.error("User not logged in");
      return;
    }

    try {
      const imageURL = await uploadFile();
      const eventsCollectionRef = collection(db, "events");

      const newFormData = {
        ...formData,
        userId,
        imageURL,
      };

      await addDoc(eventsCollectionRef, newFormData);
      console.log("Document successfully written!");
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  const uploadFile = async () => {
    if (saveImg.image) {
      const location = `events/${formData.startDate}-${formData.name}-event-image`;
      const storageRef = ref(storage, location);
      try {
        await uploadBytes(storageRef, saveImg.image);
        await getDownloadURL(storageRef);
        return location;
      } catch (err) {
        console.error("Error uploading image: ", err);
        throw err;
      }
    }
    return "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Event Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
      </div>
      <div>
        <label htmlFor="location">location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="startTime">Start Time:</label>
        <input
          type="time"
          id="startTime"
          name="startTime"
          value={formData.startTime}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Duration:</label>
        <div>
          <label htmlFor="durationHours">Hours:</label>
          <input
            type="number"
            id="durationHours"
            name="durationHours"
            value={formData.durationHours}
            onChange={handleChange}
            min="0"
            required
          />
        </div>
        <div>
          <label htmlFor="durationMinutes">Minutes:</label>
          <input
            type="number"
            id="durationMinutes"
            name="durationMinutes"
            value={formData.durationMinutes}
            onChange={handleChange}
            min="0"
            max="59"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="themeColor">Theme Color:</label>
        <input
          type="color"
          id="themeColor"
          name="themeColor"
          value={formData.themeColor}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EventForm;
