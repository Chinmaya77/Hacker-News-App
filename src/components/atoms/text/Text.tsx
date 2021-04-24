import React from "react";
import "./style.css";

interface TextProps {
  type: string;
  content: string;
}

function Text(props: TextProps) {
  const { type, content } = props;

  return <div className={`text-${type}`}>{content}</div>;
}

export default Text;
