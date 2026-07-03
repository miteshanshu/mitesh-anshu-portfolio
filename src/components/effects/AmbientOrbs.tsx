import './AmbientOrbs.css';

export function AmbientOrbs() {
  return (
    <div className="orbs" aria-hidden="true">
      <div className="orbs__orb orbs__orb--1" />
      <div className="orbs__orb orbs__orb--2" />
      <div className="orbs__orb orbs__orb--3" />
    </div>
  );
}