"use client";

import { useState } from "react";

export default function Input() {
  const [text, setText] = useState("");

  return (
    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
  );
}
