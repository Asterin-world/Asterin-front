import React, { useEffect, useState } from 'react';
import './Loading.css'; // Custom CSS for loading animation

const Loading = ({ onComplete }) => {
  const [percentage, setPercentage] = useState(0);

  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 50); // Adjust speed of loading

    return () => clearInterval(interval); // Cleanup
  }, []);

  // Call onComplete when the percentage reaches 100
  useEffect(() => {
    if (percentage === 100) {
      setTimeout(() => {
        onComplete(); // Wait for a short delay before rendering the content
      }, 500); // Optional delay to ensure smooth transition
    }
  }, [percentage, onComplete]);

  return (
    <div className="loading-container">
      <div className="loading-ring">
        {/* Circular ring for loading percentage */}
        <svg className="circular-ring" viewBox="0 0 36 36">
          <path
            className="circle-bg"
            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            strokeDasharray={`${percentage}, 100`}
            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" className="percentage">
            {percentage}%
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
