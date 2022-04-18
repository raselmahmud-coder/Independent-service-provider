import React from "react";

const Spinner = () => {
  return (
    <div className="h-screen flex items-center justify-center space-x-2">
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
