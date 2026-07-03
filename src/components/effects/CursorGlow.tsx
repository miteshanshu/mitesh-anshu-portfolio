import { useMousePosition } from '../../hooks/useMousePosition';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import './CursorGlow.css';

export function CursorGlow() {
  const { x, y } = useMousePosition();
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  if (!isDesktop) return null;

  return (
    <div
      className="cursor-glow"
      aria-hidden="true"
      style={{ left: x, top: y }}
    />
  );
}