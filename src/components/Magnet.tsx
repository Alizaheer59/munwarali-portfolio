import React, { useRef, useState } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
}

export default function Magnet({ children, padding = 150, strength = 3, className = "" }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("translate3d(0px, 0px, 0)");
  const [active, setActive] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    if (Math.abs(distanceX) < width / 2 + padding && Math.abs(distanceY) < height / 2 + padding) {
      setActive(true);
      const x = distanceX / strength;
      const y = distanceY / strength;
      setTransform(`translate3d(${x}px, ${y}px, 0)`);
    } else {
      setActive(false);
      setTransform("translate3d(0px, 0px, 0)");
    }
  };

  const handleMouseLeave = () => {
    setActive(false);
    setTransform("translate3d(0px, 0px, 0)");
  };

  return (
    <div 
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ padding: padding + 'px', margin: -padding + 'px', zIndex: 50 }}
    >
      <div
        ref={ref}
        style={{
          transform,
          transition: active ? "transform 0.3s ease-out" : "transform 0.6s ease-in-out",
          willChange: 'transform'
        }}
      >
        {children}
      </div>
    </div>
  );
}
