import Image from "next/image";

export function SplitPortrait() {
  return (
    <div
      aria-label="Illustrated portrait of Inbasekaran Perumal"
      className="portrait-system"
      role="img"
    >
      <div className="portrait-single">
        <Image
          alt=""
          aria-hidden="true"
          className="portrait-image"
          fill
          priority
          sizes="(max-width: 767px) 100vw, (max-width: 1100px) 44vw, 500px"
          src="/assets/inbase-editorial-portrait.png"
        />
      </div>
      <span className="portrait-annotation" aria-hidden="true">
        Built with care, then put to work.
      </span>
    </div>
  );
}
