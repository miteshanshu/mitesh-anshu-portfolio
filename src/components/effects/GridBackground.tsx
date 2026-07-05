import './GridBackground.css';

export function GridBackground() {
  return (
    <div className="grid-bg" aria-hidden="true">
      <div className="grid-bg__mesh" />
      <div className="grid-bg__lines" />
      <div className="grid-bg__vignette" />
    </div>
  );
}