import type { CSSProperties } from 'react';
import './Marquee.css';

interface MarqueeProps {
  items: string[];
  speed?: number;
}

export function Marquee({ items, speed = 30 }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className="marquee" style={{ '--marquee-speed': `${speed}s` } as CSSProperties}>
      <div className="marquee__track">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee__item">
            <span className="marquee__dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}