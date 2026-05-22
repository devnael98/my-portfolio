"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const body = document.body; // 🔁 نعدل على <body>
    if (dark) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="cursor-pointer text-lg transition-colors duration-300"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
