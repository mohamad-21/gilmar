import React, { CSSProperties } from "react";

export default function GridBackground({ style }: { style: CSSProperties }) {
  return (
    <img
      src="/images/grid-background.svg"
      style={{ position: "absolute", pointerEvents: "none", ...style }}
    />
  );
}
