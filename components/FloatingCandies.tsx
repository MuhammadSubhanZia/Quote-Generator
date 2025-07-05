"use client";

import { useEffect, useRef } from "react";

const EMOJIS = [
  "🎀", "🦋", "👾", "🤖", "👻", "🐈", "🐳", "🦢", "🕊️", "🫀",
  "🦴", "🎈", "🕶️", "👕", "⚽", "🪁", "🥊", "🪄", "💊", "🪃", "🔫", "🍕"
];

type Velocity = { x: number; y: number; rotation: number };
type Position = { x: number; y: number; angle: number };

const FloatingEmojis = () => {
  const emojiRefs = useRef<Array<HTMLSpanElement | null>>(new Array(EMOJIS.length).fill(null));

  useEffect(() => {
    const velocities: Velocity[] = EMOJIS.map(() => ({
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
      rotation: (Math.random() - 0.5) * 1.5,
    }));

   const quoteBox = document.getElementById("quote-box")?.getBoundingClientRect();

const safeSpawn = (): { x: number; y: number } => {
  let x = 0, y = 0;
  const emojiSize = 32;
  const padding = 20;

  while (true) {
    x = Math.random() * (window.innerWidth - emojiSize);
    y = Math.random() * (window.innerHeight - emojiSize);

    if (
      !quoteBox ||
      x + emojiSize < quoteBox.left - padding ||
      x > quoteBox.right + padding ||
      y + emojiSize < quoteBox.top - padding ||
      y > quoteBox.bottom + padding
    ) {
      return { x, y };
    }
  }
};

const positions: Position[] = EMOJIS.map(() => {
  const { x, y } = safeSpawn();
  return {
    x,
    y,
    angle: Math.random() * 360,
  };
});


    const animate = () => {
      const quoteBox = document.getElementById("quote-box")?.getBoundingClientRect();

      EMOJIS.forEach((_, idx) => {
        const emoji = emojiRefs.current[idx];
        if (!emoji) return;

        const pos = positions[idx];
        const vel = velocities[idx];

        pos.x += vel.x;
        pos.y += vel.y;
        pos.angle += vel.rotation;

        const width = window.innerWidth;
        const height = window.innerHeight;

        // Bounce off screen edges
        if (pos.x <= 0 || pos.x >= width - 32) vel.x *= -1;
        if (pos.y <= 0 || pos.y >= height - 32) vel.y *= -1;

        // Bounce off quote box
        if (quoteBox) {
          const emojiSize = 32;
          const right = pos.x + emojiSize;
          const bottom = pos.y + emojiSize;
          const isInX = right > quoteBox.left && pos.x < quoteBox.right;
          const isInY = bottom > quoteBox.top && pos.y < quoteBox.bottom;

          if (isInX && isInY) {
            vel.x *= -1;
            vel.y *= -1;
          }
        }

        emoji.style.transform = `translate(${pos.x}px, ${pos.y}px) rotate(${pos.angle}deg)`;
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="fixed inset-0 z-10 overflow-hidden pointer-events-none">
      {EMOJIS.map((emoji, idx) => (
        <span
          key={idx}
         ref={(el) => {
  emojiRefs.current[idx] = el;
}}
          className="absolute text-2xl sm:text-3xl lg:text-4xl opacity-80 animate-none"
          style={{ left: 0, top: 0 }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingEmojis;
