import React, { useState } from "react";
import "./MoodComponent.css";

function MoodComponent({ name }) {
  // All moods in an array
  const moods = ["Happy 😃", "Sad 😞", "Excited 🤩", "Angry 😠", "Relaxed 😌"];

  // Track current mood index
  const [moodIndex, setMoodIndex] = useState(0);

  // Function to switch to the next mood
  const toggleMood = () => {
    setMoodIndex((prevIndex) => (prevIndex + 1) % moods.length);
  };

  return (
    <div className="mood-container">
      <h2 className="mood-title">Hello, {name}! 👋</h2>
      <h3 className="mood-text">
        Current Mood: <span>{moods[moodIndex]}</span>
      </h3>
      <button onClick={toggleMood} className="mood-btn">
        Change Mood
      </button>
    </div>
  );
}

export default MoodComponent;
