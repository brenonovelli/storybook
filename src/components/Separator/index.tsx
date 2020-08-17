import React from "react";

const style: React.CSSProperties = {
  height: "2px",
  width: "100%",
  borderColor: "#abbabe",
  margin: "16px 0",
};

export const Separator: React.FC = () => (
  <div
    style={{
      width: "80vw",
      padding: "20px 10px",
      backgroundColor: "transparent",
    }}
  >
    <hr style={style} />;
  </div>
);
