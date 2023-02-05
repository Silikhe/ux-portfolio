import React from "react";

const ProgressBar = ({ percentage, color }) => {
  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: `${percentage}%`, background: color }}
      ></div>
    </div>
  );
};

export default ProgressBar;
