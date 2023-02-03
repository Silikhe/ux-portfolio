// Tooltip.js
import React from "react";

const Tooltip = ({ triggerElement, isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="tooltip">
      <div className="tooltip-arrow" />
      <div className="tooltip-content">{children}</div>
    </div>
  );
};

export default Tooltip;
