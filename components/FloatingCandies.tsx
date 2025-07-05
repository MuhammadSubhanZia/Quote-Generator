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
    const emojiSize = 32;
    const velocities: Velocity[] = EMOJIS.map(() => ({
      x: (Math.random() - 0.5) * 1.5,
      y: (Math.random() - 0.5) * 1.5,
      rotation: (Math.random() - 0.5) * 2,
    }));

    const getSafeSpawn = (quoteBox: DOMRect | null): { x: number; y: number } => {
      const padding = 32;
      let x = 0, y = 0;

      while (true) {
        x = Math.random() * (window.innerWidth - emojiSize - 2 * padding) + padding;
        y = Math.random() * (window.innerHeight - emojiSize - 2 * padding) + padding;

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

    const quoteBox = document.getElementById("quote-box")?.getBoundingClientRect() ?? null;

    const positions: Position[] = EMOJIS.map(() => {
      const { x, y } = getSafeSpawn(quoteBox);
      return {
        x,
        y,
        angle: Math.random() * 360,
      };
    });

    let animationId: number;

    const animate = () => {
      const quoteBox = document.getElementById("quote-box")?.getBoundingClientRect() ?? null;

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

        // Bounce off window edges
        if (pos.x <= 0 || pos.x >= width - emojiSize) {
          vel.x *= -1;
          pos.x = Math.max(0, Math.min(pos.x, width - emojiSize));
        }

        if (pos.y <= 0 || pos.y >= height - emojiSize) {
          vel.y *= -1;
          pos.y = Math.max(0, Math.min(pos.y, height - emojiSize));
        }

        // Bounce off quote box
        if (quoteBox) {
          const right = pos.x + emojiSize;
          const bottom = pos.y + emojiSize;
          const isInX = right > quoteBox.left && pos.x < quoteBox.right;
          const isInY = bottom > quoteBox.top && pos.y < quoteBox.bottom;

          if (isInX && isInY) {
            vel.x *= -1;
            vel.y *= -1;
            // Push emoji outside to avoid stuck condition
            if (right > quoteBox.left && pos.x < quoteBox.left) pos.x = quoteBox.left - emojiSize;
            if (pos.x < quoteBox.right && right > quoteBox.right) pos.x = quoteBox.right;
            if (bottom > quoteBox.top && pos.y < quoteBox.top) pos.y = quoteBox.top - emojiSize;
            if (pos.y < quoteBox.bottom && bottom > quoteBox.bottom) pos.y = quoteBox.bottom;
          }
        }

        // Animate transform
        emoji.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) rotate(${pos.angle}deg)`;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-10 overflow-hidden pointer-events-none">
        {EMOJIS.map((emoji, idx) => (
          <span
            key={idx}
            ref={(el) => {
              emojiRefs.current[idx] = el;
            }}
            className="absolute text-2xl sm:text-3xl lg:text-4xl opacity-90 will-change-transform"
            style={{
              left: 0,
              top: 0,
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
              backfaceVisibility: "hidden",
            }}
          >
            {emoji}
          </span>
        ))}
      </div>
    </>
  );
};

export default FloatingEmojis;
