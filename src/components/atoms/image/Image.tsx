import React from "react";

import "./style.css";

interface ImageProps {
  source: string;
  width?: string;

  height?: string;
  classType: string;
  alt?: string | undefined;
}

function Image(props: ImageProps) {
  const { source, width, height, alt, classType } = props;
  return (
    <div>
      <img
        src={source}
        width={width}
        height={height}
        alt={alt}
        className={`${classType}`}
      ></img>
    </div>
  );
}

export default Image;
