import React from "react";

const BackgroundWrapper = ({ bg, children }) => {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#10153D",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
        position: "relative",
      }}
    >
      
      <div
        className="absolute inset-0 bg-black opacity-20"
        style={{
          transition: "opacity 0.3s",
        }}
      ></div>

      {/* Child components */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;
