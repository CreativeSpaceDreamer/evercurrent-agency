"use client";
import { useEffect, useRef } from "react";

export default function KitFormClient() {
  const kitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!kitRef.current) return;
    // Clean up any previous content
    kitRef.current.innerHTML = "";
    // Create and append the Kit script
    const script = document.createElement("script");
    script.src = "https://lifecycle-inbox.kit.com/c41d418059/index.js";
    script.async = true;
    script.setAttribute("data-uid", "c41d418059");
    kitRef.current.appendChild(script);
    return () => {
      kitRef.current && (kitRef.current.innerHTML = "");
    };
  }, []);

  return (
    <div
      ref={kitRef}
      id="kit-form-container"
      className="w-full flex flex-col items-center"
      style={{ minHeight: 220 }}
    />
  );
}