"use client";

import { useState, useEffect } from "react";

interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  className?: string;
}

export function TypewriterText({
  texts,
  speed = 100,
  className = "",
}: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const type = () => {
      const fullText = texts[currentTextIndex] || "";

      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          timer = setTimeout(type, 500);
        } else {
          timer = setTimeout(type, speed / 2);
        }
      } else {
        setCurrentText((prev) => fullText.slice(0, prev.length + 1));
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
        } else {
          timer = setTimeout(type, speed);
        }
      }
    };

    timer = setTimeout(type, speed);
    return () => clearTimeout(timer);
  }, [currentText, currentTextIndex, isDeleting, speed, texts]);

  return (
    <span className={className}>
      {currentText}
      <span className="ml-0.5 animate-pulse" style={{ color: "var(--accent-primary)" }}>|</span>
    </span>
  );
}

export function FadeText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className} style={{ transition: "color 0.3s ease" }}>
      {text}
    </span>
  );
}
