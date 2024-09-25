import React from "react";
import { A } from "./Anchor.style";

function Anchor({ src, text }) {
  return (
    <A href={src} target="_blank" rel="noopener noreferrer">
      {text}
    </A>
  );
}

export default Anchor;
