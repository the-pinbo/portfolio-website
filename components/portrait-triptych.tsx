export function PortraitTriptych() {
  return (
    <figure className="portrait-triptych">
      <svg
        aria-labelledby="portrait-triptych-title"
        className="portrait-triptych__stage"
        role="img"
        viewBox="0 0 650 650"
      >
        <title id="portrait-triptych-title">
          Illustrated portrait of Inbasekaran Perumal
        </title>
        <defs>
          <clipPath id="portrait-left">
            <rect x="0" y="273" width="104" height="377" rx="52" />
          </clipPath>
          <clipPath id="portrait-center">
            <rect x="124" y="58" width="377" height="592" rx="72" />
          </clipPath>
          <clipPath id="portrait-right">
            <rect x="526" y="175" width="124" height="475" rx="62" />
          </clipPath>
        </defs>
        <rect
          className="portrait-triptych__fallback"
          height="650"
          rx="72"
          width="650"
        />
        <image
          className="portrait-triptych__panel"
          clipPath="url(#portrait-left)"
          height="650"
          href="/assets/inbase-editorial-portrait.png"
          preserveAspectRatio="xMidYMid meet"
          width="650"
        />
        <image
          className="portrait-triptych__panel"
          clipPath="url(#portrait-center)"
          height="650"
          href="/assets/inbase-editorial-portrait.png"
          preserveAspectRatio="xMidYMid meet"
          width="650"
        />
        <image
          className="portrait-triptych__panel"
          clipPath="url(#portrait-right)"
          height="650"
          href="/assets/inbase-editorial-portrait.png"
          preserveAspectRatio="xMidYMid meet"
          width="650"
        />
      </svg>
    </figure>
  );
}
