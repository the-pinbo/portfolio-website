import Image from "next/image";

const panels = [
  "portrait-panel--one",
  "portrait-panel--two",
  "portrait-panel--three",
  "portrait-panel--four",
];

export function SplitPortrait() {
  return (
    <div
      aria-label="Illustrated portrait of Inbasekaran Perumal"
      className="portrait-system"
      role="img"
    >
      {panels.map((panel, index) => (
        <div className={`portrait-panel ${panel}`} key={panel}>
          <Image
            alt=""
            aria-hidden="true"
            className="portrait-image"
            fill
            priority={index === 0}
            sizes="(max-width: 767px) 100vw, (max-width: 1100px) 44vw, 500px"
            src="/assets/inbase-editorial-portrait.png"
          />
        </div>
      ))}
      <span className="portrait-annotation" aria-hidden="true">
        Built with care, then put to work.
      </span>
    </div>
  );
}
