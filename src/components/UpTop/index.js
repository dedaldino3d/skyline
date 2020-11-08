import React from "react";
import { BackTop } from "antd";

const style = {
  lineHeight: "40px",
  borderRadius: "50%",
  backgroundColor: "var(--blue)",
  color: "var(--white)",
  textAlign: "center",
  fontSize: 14,
};

const UpTop = (props) => {
  return (
    <BackTop>
      <div style={style}>Up</div>
    </BackTop>
  );
};

export default UpTop;
